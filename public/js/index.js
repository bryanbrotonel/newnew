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
