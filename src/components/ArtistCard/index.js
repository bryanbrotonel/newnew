import React from "react";

import "./styles.css";

export class ArtistCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      image: props.image,
      noteableTitle: props.noteableTitle,
      noteableLink: props.noteableLink,
      submitter: props.submitter
    };
  }

  render() {
    const { name, image, noteableTitle, noteableLink, submitter } = this.props;

    return (
      <div className="card">
        <img src={`${image}`} alt={`${name}`} className="card-img-top" />
        <div className="card-body">
          <div className="card-text">
            <h5>{`${name}`}</h5>
            <p>
              Notable:
              <a
                href={`${noteableLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {`${noteableTitle}`}
              </a>
            </p>
            <p className="text-muted">
              <small>by {`${submitter}`}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
