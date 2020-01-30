import React, { Component } from 'react';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='HomeContainer-container'>
        <h1 id='test'>Home</h1>
      </div>
    )
  }
}

export default HomeContainer;

// import TwitchEmbedVideo from "react-twitch-embed-video"
// <div id='HomeContainer-panel-one'>
//   <TwitchEmbedVideo channel='focus_esports_lol' muted={true} autoplay={false} />
//   <TwitchEmbedVideo video='543890569' muted={true} autoplay={false} />
//   <TwitchEmbedVideo video='542413621' muted={true} autoplay={false} />
// </div>
