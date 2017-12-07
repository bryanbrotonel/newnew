$(document).ready(function() {
	// Google Analytics
	window.dataLayer = window.dataLayer || [];

	function gtag() {
		dataLayer.push(arguments);
	}
	gtag('js', new Date());

	gtag('config', 'UA-108344152-4');

	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyARro3Vj-i8QUJ-9E8UT7yD4ygRmGF-we4",
		authDomain: "new-new-d75cb.firebaseapp.com",
		databaseURL: "https://new-new-d75cb.firebaseio.com",
		projectId: "new-new-d75cb",
		storageBucket: "",
		messagingSenderId: "254583637908"
	};
	firebase.initializeApp(config);

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {

			console.log(firebaseUser);

			// Log out button
			const logoutButton = document.getElementById('logoutButton');
			const dashboardLink = document.getElementById('dashboardLink');

			// Display log out button
			logoutButton.style.display = "inherit";
			dashboardLink.style.display = "inherit";

			// Log out button listener
			logoutButton.addEventListener('click', e => {
				firebase.auth().signOut().then(function() {
					logoutButton.style.display = "none";
					dashboardLink.style.display = "none";
				}, function(error) {
					alert('Sign Out Error: ', error);
				});
			})
		}
	});
});

$(document).ready(function() {

	function createPost(artistName, artistDescription, artistImage, soundcloud, instagram) {
		const postList = document.getElementById('postList');

		// Create DOM elements
		var listItem = document.createElement("li");
		var imageWrapper = document.createElement("div");
		var image = document.createElement("img");
		var contentWrapper = document.createElement("div");
		var header = document.createElement("h4");
		var paragraph = document.createElement("p");

		// Create content elements
		var artistNameContent = document.createTextNode(artistName);
		var artistDescriptionContent = document.createTextNode(artistDescription);
		var artistImageContent = document.createTextNode(artistImage)
		var soundcloudContent = document.createTextNode(soundcloud);
		var instagramContent = document.createTextNode(instagram);

		// Append content to elements
		paragraph.appendChild(artistDescriptionContent);

		header.setAttribute("class", "mt-0");
		header.appendChild(artistNameContent);

		contentWrapper.setAttribute("class", "media-body col-md-7");
		contentWrapper.appendChild(header);
		contentWrapper.appendChild(paragraph);

		image.setAttribute("class", "artistimage align-self-center mr-3");
		image.setAttribute("src", artistImage);
		image.appendChild(artistImageContent);

		imageWrapper.setAttribute("class", "col-md-5 mx-auto");
		imageWrapper.appendChild(image);

		listItem.setAttribute("class", "media row");
		listItem.appendChild(imageWrapper);
		listItem.appendChild(contentWrapper);

		postList.appendChild(listItem);
	}

	firebase
		.database()
		.ref('artists/artists_list')
		.orderByChild('posted')
		.on('child_added', function(data) {
			firebase
				.database()
				.ref('artists/posts/' + data.key)
				.on('value', function(artistData) {
					// Get artist data
					const name = artistData.val().name;
					const description = artistData.val().description;
					const image = artistData.val().image;
					const soundcloud = artistData.val().soundcloud;
					const instagram = artistData.val().instagram;

          // Create artist post
					createPost(name, description, image, soundcloud, instagram);
				});
		});
});

$(document).ready(function() {

	// Get HTML elements
	const loginEmail = document.getElementById('email');
	const loginPassword = document.getElementById('password');
	const loginButton = document.getElementById('loginButton');
	const logoutButton = document.getElementById('logoutButton');
	const dashboardLink = document.getElementById('dashboardLink');

	loginButton.addEventListener('click', function() {
		//Get email and pass
		const email = loginEmail.value;
		const pass = loginPassword.value;
		const auth = firebase.auth();

		//Sign In
		firebase.auth().signInWithEmailAndPassword(email, pass).then(function() {
			// Redirect to Dashboard
			window.location = "dashboard";

			// Display button
			logoutButton.style.display = "inherit";
			dashboardLink.style.display = "inherit";

		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;

			alert(errorCode + ": " + errorMessage);

		});
	});
});

$(document).ready(function() {
	const submitArtistbtn = document.getElementById('submitArtist');
	const plugName = document.getElementById('plugName');
	const artistName = document.getElementById('artistName');


	submitArtistbtn.addEventListener('click', function() {
		// Get submission values
		var artistNameVal = artistName.value;
		var plugNameVal = artistName.value;

		var inboxRef = 'artists/inbox/';

		var submissionData = {
			plug: plugNameVal,
			artist: artistNameVal
		};

		var key = firebase.database().ref(inboxRef).push().key;

		var update = {};

		update[inboxRef + key] = submissionData;

		return firebase
			.database()
			.ref()
			.update(update)
      .then(function() {
        alert("Submisison complete 🔌");
      })
			.catch(function(error) {
				console.log(error);
				alert(error.message)
			});
	});
});

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
