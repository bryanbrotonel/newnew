import React from "react";

import firebase from "firebase/app";
import "firebase/database";

import FormInput from "components/FormInput";

import { Card, CardBody, Alert } from "reactstrap";

import "./styles.css";

export default class Share extends React.Component {
  constructor() {
    super();

    this.state = {
      artist: "",
      notable: "",
      handle: "",
      submitted: false
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.shareArtist = this.shareArtist.bind(this);
  }

  componentDidMount() {
    // Change page title
    document.title = "new new | Share";
  }

  handleFormChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { handle, artist, notable } = this.state;
    this.shareArtist(handle, artist, notable);

    this.setState({
      artist: "",
      notable: "",
      handle: "",
      submitted: true
    });
  }

  shareArtist(handle, artist, notable) {
    const firebaseDB = firebase.database();

    var share = {
      artist: artist,
      notable: notable,
      handle: handle
    };

    var updates = {};

    updates["shares/" + firebaseDB.ref("shares").push().key] = share;

    firebaseDB.ref().update(updates);
  }

  render() {
    const { artist, notable, handle, submitted } = this.state;

    let thanks;

    if (submitted) {
      thanks = (
        <React.Fragment>
          <br />
          <Alert color="success">
            Successfully submitted, thanks for sharing!
          </Alert>
        </React.Fragment>
      );
    }

    return (
      <div className="container hv-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-5 col-lg-4 hv-center">
            <div>
              <div className="pb-3">
                <h3>Know any artists?</h3>
                <h5>
                  Plug them in.&#160;
                  <span className="ec ec-electric-plug" />
                </h5>
              </div>
              <div>
                <p>
                  From one listener to another, let's share music. Drop your
                  current favourite artist and your favourite work from them,
                  and I'll add it to the New New collection. Also, don't forget
                  to drop your handle so I can shout you out.
                </p>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-5 col-lg-4">
            <div>
              <Card className="shadow">
                <CardBody>
                  <form onSubmit={this.handleSubmit}>
                    <FormInput
                      inputID="artist"
                      inputPlaceholder="Artist Name"
                      onChange={this.handleFormChange}
                      value={artist}
                    />
                    <FormInput
                      inputID="notable"
                      inputPlaceholder="Notable Work"
                      onChange={this.handleFormChange}
                      value={notable}
                    />
                    <FormInput
                      inputID="handle"
                      inputPlaceholder="Your Handle"
                      onChange={this.handleFormChange}
                      value={handle}
                    />
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </CardBody>
              </Card>
              {thanks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
