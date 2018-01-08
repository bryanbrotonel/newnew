$(document).ready(function() {

	function createPost(artistName, artistDescription, artistImage, soundcloud, instagram, date) {
		const postList = document.getElementById('postList');

		// Create DOM elements
		var cardWrapper = document.createElement("div");
		var image = document.createElement("img");
		var cardBody = document.createElement("div");
		var cardFooter = document.createElement("div");
		var header = document.createElement("h5");
		var paragraph = document.createElement("p");
		var metadata = document.createElement("p");

		// Create content elements
		var artistNameContent = document.createTextNode(artistName);
		var artistDescriptionContent = document.createTextNode(artistDescription);
		var artistImageContent = document.createTextNode(artistImage)
		var soundcloudContent = document.createTextNode(soundcloud);
		var instagramContent = document.createTextNode(instagram);
		var metadataContent = document.createTextNode(date)

		// Append content to elements
		header.setAttribute("class", "card-title");
		header.appendChild(artistNameContent);

		image.setAttribute("class", "card-img-top");
		image.setAttribute("src", artistImage);
		image.setAttribute("alt", artistNameContent);
		image.appendChild(artistImageContent);

		paragraph.setAttribute("class", "card-text");
		paragraph.appendChild(artistDescriptionContent);

		metadata.setAttribute("class", "text-muted");
		metadata.appendChild(metadataContent);

		cardBody.setAttribute("class", "card-body");
		cardBody.appendChild(header);
		cardBody.appendChild(paragraph);

		cardFooter.setAttribute("class", "card-footer");
		cardFooter.appendChild(metadata);

		cardWrapper.setAttribute("class", "card mx-auto");
		cardWrapper.appendChild(image);
		cardWrapper.appendChild(cardBody);
		cardWrapper.appendChild(cardFooter);

		postList.appendChild(cardWrapper);

	}

	firebase
		.database()
		.ref('artists/artists_list')
		.orderByChild('posted')
		.on('child_added', function(data) {
			var time = (data.val().posted).toString().substr(1);
			var d = new Date(parseInt(time));

      // Get day
			var curr_day = d.getDate()

			// Get month
			var m = new Array();
			m[0] = "Jan";
			m[1] = "Feb";
			m[2] = "Mar";
			m[3] = "Apr";
			m[4] = "May";
			m[5] = "Jun";
			m[6] = "Jul";
			m[7] = "Aug";
			m[8] = "Sept";
			m[9] = "Oct";
			m[10] = "Nov";
			m[11] = "Dec";
			var curr_month = m[d.getMonth()];

      // Get Year
			var curr_year = d.getFullYear();

      // Format date
			var date = curr_month + ' ' + curr_day + ", " + curr_year;

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
					createPost(name, description, image, soundcloud, instagram, date);
				});
		});
});
