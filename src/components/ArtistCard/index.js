import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import "./styles.css";

import { SocialIcon } from "components/Social Icon";

export default class ArtistCard extends React.Component {

  render() {
    const {
      name,
      image,
      noteableTitle,
      noteableLink,
      instagram,
      soundcloud,
      submitter,
      timeStamp

    } = this.props;

    return (
      <Card className="shadow-l p-3 bg-white rounded animated fadeIn slower delay-2s">
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
            <br/>
            <small className="text-muted">{`${timeStamp}`}</small>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}
