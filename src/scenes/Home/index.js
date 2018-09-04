import React from "react";

import Loadable from "react-loadable";

import Loading from "components/Loading";

import { getPosts, getArtists } from "helpers/dbHelpers";

import "./styles.css";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const self = this;

    // Change page title
    document.title = "new new";

    getPosts()
      .then(function(posts) {
        return getArtists(posts);
      })
      .then(function(artistPosts) {
        // Set state with all posts
        self.setState({
          posts: artistPosts
        });
      });
  }

  render() {
    // Creating artist card loadable
    const ArtistCardLoadable = Loadable({
      loader: () => import("components/ArtistCard"),
      render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props} />;
      },
      loading: Loading
    });

    const posts = this.state.posts.map(artist => (
      <div
        className="col-10 col-md-6 col-lg-4 artist-card"
        key={`${artist.name}`}
      >
        <ArtistCardLoadable
          name={`${artist.name}`}
          image={`${artist.image}`}
          noteableTitle={`${artist.notableTitle}`}
          noteableLink={`${artist.notableLink}`}
          instagram={`${artist.instagram}`}
          soundcloud={`${artist.soundcloud}`}
          submitter={`${artist.submitter}`}
          timeStamp={`${artist.timeStamp}`}
        />
      </div>
    ));

    return (
      <div className="container">
        <div className="flex-center">
          <div className="row justify-content-center">{posts}</div>
        </div>
      </div>
    );
  }
}
