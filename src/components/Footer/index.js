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
                <h6 className="footer-header">NEW NEW</h6>
                <p>New New is a platform where light is shed on new and upcoming artists.</p>
              </div>
              <div className="col-md-3">
                <h6 className="footer-header">LINKS</h6>
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
