import React from 'react';

const VideoDetail = ({ videoId, showMe }) => {
  if (!videoId) {
    return <div>Loading...</div>
  }

  if (!showMe) {
    return null;
  }

//  const videoId = video.id.videoId;
  const url = `//players.brightcove.net/2924921184001/BJq9ZAyEW_default/index.html?videoId=${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" width="650" height="365"></iframe>
      </div>
    </div>
  );
};

export default VideoDetail;
