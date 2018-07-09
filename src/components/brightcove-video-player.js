import React, { Component } from 'react';

class BrightCoveVideoPlayer extends Component {
//  if (!videoId) {
//    return <div>Loading...</div>
//  }
  constructor({props}) {
    super(props);
  }

  render() {
    const
      accountId = "2924921184001",
      playerId = "BJq9ZAyEW",
      userEmail = "eric@mastered.com";

    let script = document.createElement("script");
    script.type = "text/javascript"
    script.innerHTML = 'src="http://sadmin.brightcove.com/js/BrightcoveExperiences.js"';
    document.body.appendChild(script);

    return (
      <div className="video-detail col-md-8">
        <div className="ms-brightcove-video">
          <video
            id="bcVideo"
            data-video-id={this.props.videoId}
            data-account={accountId}
            data-player={playerId}
            data-bc-email={userEmail}
            data-embed="default"
            data-application-id
            className="video-js"
            width="650"
            height="365"
            controls>
          </video>
          <script type="text/javascript" src="http://sadmin.brightcove.com/js/BrightcoveExperiences.js" />
          <script src="http://players.brightcove.net/2924921184001/BJq9ZAyEW_default/index.min.js"/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.vTag = document.getElementById('bcVideo');
    let script = document.createElement("script");
    script.type = "text/javascript"
    script.innerHTML = 'src="http://sadmin.brightcove.com/js/BrightcoveExperiences.js"';
    document.body.appendChild(script);
//    this.vTag.setAttribute('data-account', "2924921184001");
    bc(this.vTag);

  }
  componentDidUpdate() {
    let script = document.createElement("script");
    script.type = "text/javascript"
    script.innerHTML = 'src="//sadmin.brightcove.com/js/BrightcoveExperiences.js"';
    document.body.appendChild(script);
  }
}

export default BrightCoveVideoPlayer;
