import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
  return [
    <div id='NavigationBar-container' key='navbar'>
      <ul id='NavigationBar-ul'>
        <div id='NavigationBar-li-container-left'>
          <Link className='NavigationBar-li' to='/'><li >Leagues</li></Link>
          <Link className='NavigationBar-li' to='/standings'><li>Standings</li></Link>
          <Link className='NavigationBar-li' to='/stats'><li>Stats</li></Link>
        </div>
        <li id='NavigationBar-logo'><Link to='/'><img src={require('../../assets/images/logos/fcs_logo.png')} alt='Focus Esports Logo'/></Link></li>
        <div id='NavigationBar-li-container-right'>
          <Link className='NavigationBar-li' to='/about'><li>About Us</li></Link>
          <a className='NavigationBar-li' href='https://getpryde.com/focus/' target='_blank'><li>Store</li></a>
          <Link className='NavigationBar-li' to='/connect'><li>Connect</li></Link>
        </div>
      </ul>
    </div>,
    <div id='NavigationBar-spacer' key='spacer'></div>
  ]
}

export default NavigationBar;
