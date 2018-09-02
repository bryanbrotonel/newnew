import React from "react";

import firebase from "firebase/app";
import "firebase/database";

import { ArtistCard } from "components/ArtistCard";

import "./styles.css";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.getArtists = this.getArtists.bind(this);
  }

  componentDidMount() {
    const self = this;

    // Change page title
    document.title = "new new";

    this.getPosts()
      .then(function(posts) {
        return self.getArtists(posts);
      })
      .then(function(artistPosts) {

        // Set state with all posts
        self.setState({
          posts: artistPosts
        });
      });
  }

  // Get post data for all posts
  getPosts() {
    return new Promise(function(resolve, reject) {

      // Firebase post data reference
      firebase
        .database()
        .ref("artists/artists_list")
        .orderByChild("posted")
        .once("value", function(snapshot) {
          console.log(snapshot.val());
          return snapshot ? resolve(snapshot) : reject(snapshot);
        });
    });
  }

  // Get artist data for all artists
  getArtists(snapshot) {
    const self = this;
    self.posts = [];

    return new Promise(function(resolve, reject) {

      // Firebase artists data reference
      firebase
        .database()
        .ref("artists/posts")
        .once("value", function(snapshot) {
          const postData = snapshot.val();

          // For each loop iterating each post key
          snapshot.forEach(function(childSnapshot) {
            const artistData = postData[childSnapshot.key];

            // Store data snapshot in object
            const artistItem = {
              name: artistData.name,
              image: artistData.image,
              notableTitle: artistData.notableTitle,
              notableLink: artistData.notableLink,
              instagram: artistData.instagram,
              soundcloud: artistData.soundcloud
            };

            // Add to posts array
            self.posts.push(artistItem);

            // Return with posts array
            return self.posts ? resolve(self.posts) : reject(self.posts);
          });
        });
    });
  }

  render() {
    console.log("rendered posts", this.state.posts);

    const posts = this.state.posts.map(artist => (
      <div
        className="col-12 col-md-6 col-lg-4 artist-card"
        key={`${artist.name}`}
      >
        <ArtistCard
          name={`${artist.name}`}
          image={`${artist.image}`}
          noteableTitle={`${artist.notableTitle}`}
          noteableLink={`${artist.notableLink}`}
          instagram={`${artist.instagram}`}
          soundcloud={`${artist.soundcloud}`}
          submitter="@bryanbrotonel"
        />
      </div>
    ));

    return (
      <div className="container">
        <div className="flex-center">
          <div className="row">{posts}</div>
        </div>
      </div>
    );
  }
}
