$(document).ready(function() {

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {

			const signupEmail = document.getElementById('email');
			const signupPassword = document.getElementById('password');
			const signupConfirmPassword = document.getElementById('confirmPassword');
			const signupButton = document.getElementById('signupButton');

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
		} else {
			window.location = "login";
		}
	});
});
