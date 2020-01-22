import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
  return [
    <div id='NavigationBar-container' key='navbar'>
      <ul id='NavigationBar-ul'>
        <div id='NavigationBar-li-container-left'>
          <li className='NavigationBar-li'><Link to='/'>Leagues</Link></li>
          <li className='NavigationBar-li'><Link to='/Standings'>Standings</Link></li>
          <li className='NavigationBar-li'><Link to='/Stats'>Stats</Link></li>
        </div>
        <li id='NavigationBar-logo'><Link to='/'><img src={require('../../assets/images/logos/fcs_logo.png')} alt='Focus Esports Logo'/></Link></li>
        <div id='NavigationBar-li-container-right'>
        <li className='NavigationBar-li'><Link to='/About'>About Us</Link></li>
        <li className='NavigationBar-li'><a href='https://getpryde.com/focus/' target='_blank'>Store</a></li>
          <li className='NavigationBar-li'><Link to='/Social_Media'>Social Media</Link></li>
        </div>
      </ul>
    </div>,
    <div id='NavigationBar-spacer' key='spacer'></div>
  ]
}

export default NavigationBar;
