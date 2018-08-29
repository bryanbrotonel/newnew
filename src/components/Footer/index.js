import React from "react";
import "./styles.css";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-body">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  deleniti error quia maiores consectetur veritatis quis
                  quaerat, at voluptatem accusamus fugit nam molestias odit
                  earum dolor quisquam, quam optio, doloribus?
                </p>
              </div>
              <div className="col-md-3">
                <h5 className="footer-header">LINKS</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="./home">Home</a>
                  </li>
                  <li>
                    <a href="./motive">Motive</a>
                  </li>
                  <li>
                    <a href="./share">Share</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-footer w-100 text-center">
          <span>&#169; New New {new Date().getFullYear()}</span>
        </div>
      </div>
    );
  }
}
