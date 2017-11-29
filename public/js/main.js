$(function() {
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


	// create sidebar and attach to menu open
	$('.ui.sidebar')
		.sidebar('attach events', '.toc.item');

});
