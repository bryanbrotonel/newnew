import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import "./styles.css";

import { SocialIcon } from "components/Social Icon";

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
      <Card className="shadow-lg p-3 bg-white rounded animated fadeIn slower delay-2s">
        <CardImg top width="100%" src={`${image}`} alt={`${name}`} />
        <CardBody>
          <CardTitle>{`${name}`}</CardTitle>
          <CardText>
            Notable:&#160;
            <a
              href={`${noteableLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`${noteableTitle}`}
            </a>
          </CardText>
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
          </div>
          <CardText>
            <small className="text-muted">by {`${submitter}`}</small>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}
