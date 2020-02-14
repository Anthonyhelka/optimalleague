import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{paddingTop: '10px'}}>
        <Message warning icon='wrench' header='This Page (Home) is Still Under Development' content='Please head over to Standings or Stats to see our currently available content! We are sorry for the inconvenience.' />
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
