import React from "react";

export default class Share extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // Change page title
    document.title = "New New | Share"
  }

  render() {
    return (
      <div className="container">
        <h5>Share</h5>
      </div>
    )
  }
}
