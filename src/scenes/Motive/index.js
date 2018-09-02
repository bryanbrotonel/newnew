import React from "react";

export default class Motive extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // Change page title
    document.title = "new new | Motive";
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-sm-12 pb-3">
            <h4>new new</h4>
          </div>
          <div className="col-10 col-md-5">
            <p>
              new new is a platform where I shed light on new artists. Curated
              by personal taste, this is a collection of the different sounds
              that I discover from my day to day listening.
            </p>
            <p>
              Sharing music is one of the greatest gifts we can ever receive.
              new new allows me to share new refreshing sounds to the world.
            </p>
            <p>From one listener to another</p>
            <p>
              <a
                href="https://bryanbrotonel.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                @bryanbrotonel
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
