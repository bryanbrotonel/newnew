import React from "react";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // Change page title
    document.title = "New New | Contact"
  }

  render() {
    return (
      <div className="container">
        <h5>@newnew</h5>
      </div>
    )
  }
}
