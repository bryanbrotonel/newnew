import firebase from "firebase/app";
import "firebase/database";

function formatDate(date) {
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getYear();

  return day + "/" + ("0" + (monthIndex + 1)).slice(-2) + "/" + year;
}

// Get post data for all posts
export function getPosts() {
  return new Promise(function(resolve, reject) {
    // Firebase post data reference
    firebase
      .database()
      .ref("artists/artists_list")
      .orderByChild("posted")
      .once("value", function(snapshot) {
        return snapshot ? resolve(snapshot) : reject(snapshot);
      });
  });
}

// Get artist data for all artists
export function getArtists(artistsData) {
  var posts = [];

  return new Promise(function(resolve, reject) {
    // Firebase artists data reference
    firebase
      .database()
      .ref("artists/posts")
      .once("value", function(snapshot) {
        const postData = snapshot.val();

        // For each loop iterating each post key
        artistsData.forEach(function(artistSnapshot) {
          const artistData = postData[artistSnapshot.key];

          // Format post timestamp
          const timeStamp = formatDate(
            new Date(
              parseInt(
                artistSnapshot
                  .val()["posted"].toString()
                  .substring(1), 10
              )
            )
          );

          // Store data snapshot in object
          const artistItem = {
            name: artistData.name,
            image: artistData.image,
            notableTitle: artistData.notableTitle,
            notableLink: artistData.notableLink,
            instagram: artistData.instagram,
            soundcloud: artistData.soundcloud,
            submitter: artistSnapshot.val()["author"],
            timeStamp: timeStamp.toString()
          };

          // Add to posts array
          posts.push(artistItem);

          // Return with posts array
          return posts ? resolve(posts) : reject(posts);
        });
      });
  });
}
