import React from "react";

import { ArtistCard } from "components/ArtistCard";

import "./styles.css";

export default class Home extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // Change page title
    document.title = "new new";
  }

  render() {
    return (
      <div className="container">
        <div className="flex-center">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 artist-card">
              <ArtistCard
                name="Atu"
                image="https://i.imgur.com/9z6f0IY.png"
                noteableTitle="Sonder Unreleased 01"
                noteableLink="https://www.youtube.com/watch?v=t6QanTjf0s0"
                instagram=""
                soundcloud="alphatmu"
                submitter="@bryanbrotonel"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 artist-card">
              <ArtistCard
                name="Dpat"
                image="https://i.imgur.com/CM278ie.jpg"
                noteableTitle="Sonder Unreleased 05-06"
                noteableLink="https://www.youtube.com/watch?v=RXfF-bQxPp4"
                instagram="dpatbeats"
                soundcloud="dpat"
                submitter="@bryanbrotonel"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 artist-card">
              <ArtistCard
                name="Brent Faiyaz"
                image="https://i.imgur.com/kpLE9kO.jpg"
                noteableTitle="Poison"
                noteableLink="https://soundcloud.com/brentfaiyaz/poison-prod-by-ben-free?in=brentfaiyaz/sets/a-m-paradox"
                instagram="brentfaiyaz"
                soundcloud="brentfaiyaz"
                submitter="@bryanbrotonel"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 artist-card">
              <ArtistCard
                name="Blood Orange"
                image="https://i.imgur.com/MwJ631q.jpg"
                noteableTitle="Saint"
                noteableLink="https://soundcloud.com/bloodorange/saint?in=bloodorange/sets/negro-swan"
                instagram="devhynes"
                soundcloud="bloodorange"
                submitter="@bryanbrotonel"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 artist-card">
              <ArtistCard
                name="Arin Ray"
                image="https://i.imgur.com/YGmKNR5.jpg"
                noteableTitle="Stressin"
                noteableLink="https://soundcloud.com/arin-ray/stressin?in=arin-ray/sets/platinum-fire-1"
                instagram="arinraycamp"
                soundcloud="arin-ray"
                submitter="@bryanbrotonel"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 artist-card">
              <ArtistCard
                name="Rex Orange County"
                image="https://i.imgur.com/KCxr908.jpg"
                noteableTitle="Edition"
                noteableLink="https://www.youtube.com/watch?v=8ECLpFVE5pE"
                instagram="rexorangecounty"
                soundcloud="rexorangecounty"
                submitter="@bryanbrotonel"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
