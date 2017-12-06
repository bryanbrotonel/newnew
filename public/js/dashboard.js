$(document).ready(function() {

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {

			// Get HTML elements
			const signupEmail = document.getElementById('email');
			const signupPassword = document.getElementById('password');
			const signupConfirmPassword = document.getElementById('confirmPassword');

			const artistName = document.getElementById('artistName');
			const artistDescription = document.getElementById('artistDescription');
			const artistImage = document.getElementById('artistImage');
			const artistSoundCloud = document.getElementById('artistSoundCloud');
			const artistInstagram = document.getElementById('artistInstagram');
			const addArtist = document.getElementById('addArtist');

			const inboxList = document.getElementById('inboxList');
			const artistList = document.getElementById('artistList');


			// Sync artist list
			firebase
				.database()
				.ref('artists/artists_list')
				.orderByChild('posted')
				.on('child_added', function(data) {
					firebase
						.database()
						.ref('artists/posts/' + data.key)
						.on('value', function(artistData) {
							var li = document.createElement("LI");
							li.innerText = artistData.val().name;
							artistList.append(li);
						});
				});

			// Sync inbox list
			firebase
				.database()
				.ref('artists/inbox')
				.orderByChild('posted')
				.on('child_added', function(data) {
					var li = document.createElement("LI");
					li.innerText = data.val().artist + " by " + data.val().plug;
					inboxList.append(li);
				});
			// Sign up Validation
			signupButton.addEventListener('click', e => {

				const emailVal = signupEmail.value;
				const passwordVal = signupPassword.value;
				const conrimPasswordVal = signupConfirmPassword.value;

				if (passwordVal === conrimPasswordVal) {
					firebase.auth().createUserWithEmailAndPassword(emailVal, passwordVal).then(function() {
						alert(emailVal + "'s account made.")
					}).catch(function(error) {

						// Handle signup errors
						switch (error.code) {
							case 'auth/weak-password':
								alert('The password is to weak.');
								break;
							case 'auth/invalid-email':
								alert('The email is invalid.');
								break;
							case 'auth/email-already-in-use':
								alert('The email is already in use.');
								break;
							default:
								alert(error.message);
						}
					});
				} else {
					alert("Passwords don't match.");
				}
			});

			// Submit artists
			addArtist.addEventListener('click', function() {
				// Get Artist vales
				var artistNameVal = artistName.value;
				var artistDescriptionVal = artistDescription.value;
				var artistImageVal = artistImage.value;
				var artistSoundCloudVal = artistSoundCloud.value;
				var artistInstagramVal = artistInstagram.value;

				// Add to database
				var artistsRef = 'artists/';

				var artistPost = {
					name: artistNameVal,
					description: artistDescriptionVal,
					image: artistImageVal,
					soundcloud: artistSoundCloudVal,
					instagram: artistInstagramVal
				};

				var postData = {
					posted: new Date().getTime()
				}

				var key = firebase.database().ref(artistsRef + 'posts').push().key;

				var updates = {};
				updates[artistsRef + 'posts/' + key] = artistPost;
				updates[artistsRef + 'artists_list/' + key] = postData;

				return firebase
					.database()
					.ref()
					.update(updates)
					.catch(function(error) {
						console.log(error);
						alert(error.message)
					});
			});

		} else {
			window.location = "login";
		}
	});
});
