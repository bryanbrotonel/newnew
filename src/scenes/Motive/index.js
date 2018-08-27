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
        <div className="row justify-content-center text-center">
          <div className="col-sm-12 pb-3">
            <h4>New New</h4>
          </div>
          <div className="col-sm-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam temporibus perferendis, mollitia itaque veniam qui minima molestias officiis necessitatibus dicta nihil recusandae labore ducimus at in ipsum quia. Illum.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, reiciendis, ipsa. Temporibus quibusdam, officiis molestiae quam voluptate omnis iste tempora voluptatum magnam accusantium! Repellendus possimus enim quos officiis, sed deserunt.</p>
          </div>
        </div>
      </div>
    )
  }
}
