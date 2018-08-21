import React from "react";

export default class Motive extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // Change page title
    document.title = "New New | Motive"
  }

  render() {
    return (
      <div className="container">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam temporibus perferendis, mollitia itaque veniam qui minima molestias officiis necessitatibus dicta nihil recusandae labore ducimus at in ipsum quia. Illum.
        </p>
      </div>
    )
  }
}
