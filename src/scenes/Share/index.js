import React from "react";

import FormInput from "components/FormInput";

import "./styles.css";

export default class Share extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // Change page title
    document.title = "New New | Share";
  }

  render() {
    return (
      <div className="container hv-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 col-lg-4 hv-center">
            <div>
              <div className="pb-3">
                <h3>Know any artists?</h3>
                <h5>
                  Plug them in.
                  <span className="ec ec-electric-plug" />
                </h5>
              </div>
              <div>
                <h6>Sharing music is for the soul.</h6>
                <p>
                  From one listener to another, let's share music. Drop your
                  current favourite artist and your favourite work from them,
                  and I'll add it to the New New collection. Also, don't forget to drop your handle so I can shout you out.
                </p>
                <p>Love.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4 hv-center">
            <div>
              <div className="card">
                <div className="card-body">
                  <FormInput inputID="shareName" inputPlaceholder="Your Name" />
                  <FormInput
                    inputID="shareArtist"
                    inputPlaceholder="Artist Name"
                  />
                  <FormInput
                    inputID="shareNotable"
                    inputPlaceholder="Notable Work"
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
