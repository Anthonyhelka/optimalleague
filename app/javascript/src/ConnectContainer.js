import React, { Component } from 'react';

class ConnectContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='Connect-container'>
        <h1 id='Connect-title'>Social Media</h1>
        <ul id='Connect-ul'>
          <li className='Connect-li'>
            <a href='https://discord.gg/QFJgFnk' target='_blank'>
              <img src={require('../../assets/images/social_media/discord_black.png')} alt='Discord Icon'/>
              <span className='Connect-li-title'>&nbsp;Discord</span>
            </a>
          </li>
          <li className='Connect-li'>
            <a href='https://twitter.com/FocusEsportsLoL' target='_blank'>
              <img src={require('../../assets/images/social_media/twitter_black.png')} alt='Twitter Icon'/>
              <span className='Connect-li-title'>&nbsp;Twitter</span>
            </a>
          </li>
          <li className='Connect-li'>
            <a href='https://www.twitch.tv/focus_esports_lol' target='_blank'>
              <img src={require('../../assets/images/social_media/twitch_black.png')} alt='Twitch Icon'/>
              <span className='Connect-li-title'>&nbsp;Twitch</span>
            </a>
          </li>
          <li className='Connect-li'>
            <a href='https://www.youtube.com/channel/UC58W3Ws2JTP-xUMLVQ0jsUQ' target='_blank'>
              <img src={require('../../assets/images/social_media/youtube_black.png')} alt='YouTube Icon'/>
              <span className='Connect-li-title'>&nbsp;YouTube</span>
            </a>
          </li>
          <li className='Connect-li'>
            <a href='https://focusesportsblog.wordpress.com/' target='_blank'>
              <img src={require('../../assets/images/social_media/wordpress_black.png')} alt='Wordpress Icon'/>
              <span className='Connect-li-title'>&nbsp;Wordpress</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default ConnectContainer;
