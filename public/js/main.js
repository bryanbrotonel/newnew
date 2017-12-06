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
