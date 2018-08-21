import React from "react";

export default class Home extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // Change page title
    document.title = "New New"
  }

  render() {
    return (
      <div className="container">
        <h1>Home</h1>
      </div>
    )
  }
}
