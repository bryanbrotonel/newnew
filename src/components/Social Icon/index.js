import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class SocialIcon extends React.Component {

  render() {
    const { platform, handle } = this.props;
    return (
      <React.Fragment>
        <a href={"https://" + platform + ".com/" + handle} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", `${platform}`]} size="2x" fixedwidth="true"/>
        </a>
      </React.Fragment>
    );
  }
}
