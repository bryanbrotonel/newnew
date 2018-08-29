import React from "react";

import { SocialIcon } from "components/Social Icon";

import "./styles.css";

export class ArtistCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      image: props.image,
      noteableTitle: props.noteableTitle,
      noteableLink: props.noteableLink,
      instagram: props.instagram,
      soundcloud: props.soundcloud,
      submitter: props.submitter
    };
  }

  render() {
    const {
      name,
      image,
      noteableTitle,
      noteableLink,
      instagram,
      soundcloud,
      submitter
    } = this.state;

    return (
      <div className="shadow-lg p-3 mb-5 bg-white rounded card">
        <img src={`${image}`} alt={`${name}`} className="card-img-top" />
        <div className="card-body">
          <div className="card-text">
            <div>
              <h5>{`${name}`}</h5>
            </div>
            <div>
              <p>
                Notable:&#160;
                <a
                  href={`${noteableLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${noteableTitle}`}
                </a>
              </p>
            </div>
            <div>
              <ul className="list-inline">
                {instagram.length > 0 && (
                  <li className="list-inline-item">
                    <SocialIcon handle={`${instagram}`} platform="instagram" />
                  </li>
                )}

                {soundcloud.length > 0 && (
                  <li className="list-inline-item">
                    <SocialIcon handle={`${soundcloud}`} platform="soundcloud" />
                  </li>
                )}
              </ul>
              <p />
            </div>
            <p className="text-muted">
              <small>by {`${submitter}`}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
