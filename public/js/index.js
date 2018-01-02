$(document).ready(function() {

	function createPost(artistName, artistDescription, artistImage, soundcloud, instagram) {
		const postList = document.getElementById('postList');

		// Create DOM elements
		var cardWrapper = document.createElement("div");
		var image = document.createElement("img");
		var cardBody = document.createElement("div");
		var header = document.createElement("h5");
		var paragraph = document.createElement("p");

		// Create content elements
		var artistNameContent = document.createTextNode(artistName);
		var artistDescriptionContent = document.createTextNode(artistDescription);
		var artistImageContent = document.createTextNode(artistImage)
		var soundcloudContent = document.createTextNode(soundcloud);
		var instagramContent = document.createTextNode(instagram);

		// Append content to elements
		image.setAttribute("class", "card-img-top");
		image.setAttribute("src", artistImage);
		image.setAttribute("alt", artistNameContent);
		image.appendChild(artistImageContent);

		paragraph.setAttribute("class", "card-text");
		paragraph.appendChild(artistDescriptionContent);

		header.setAttribute("class", "card-title");
		header.appendChild(artistNameContent);

		cardBody.setAttribute("class", "card-body");
		cardBody.appendChild(header);
		cardBody.appendChild(paragraph);


		cardWrapper.setAttribute("class", "card");
		cardWrapper.appendChild(image);
		cardWrapper.appendChild(cardBody);

		postList.appendChild(cardWrapper);

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
