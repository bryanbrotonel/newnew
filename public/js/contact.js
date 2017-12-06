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
