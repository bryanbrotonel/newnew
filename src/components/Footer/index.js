import React from "react";
import "./styles.css";

export class Footer extends React.Component {

  render() {
    return (
      <div className="footer container">
        <hr />
        <div className="row justify-content-between">
          <div className="col-md-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              deleniti error quia maiores consectetur veritatis quis quaerat, at
              voluptatem accusamus fugit nam molestias odit earum dolor
              quisquam, quam optio, doloribus?
            </p>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li><a href="./home">Home</a></li>
              <li><a href="./share">Share</a></li>
              <li><a href="./motive">Motive</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className=" w-100 text-center text-muted">
            <p>&#169; New New {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    );
  }
}
