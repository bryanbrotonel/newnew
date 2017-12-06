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
