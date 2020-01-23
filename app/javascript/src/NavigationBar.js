import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classnames from "classnames";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    (window.window.pageYOffset >= 50) ? this.setState({ scrolled: true }) : this.setState({ scrolled: false });
  };

  render() {
    return [
      <div className={classnames('NavigationBarOriginal-container', { 'NavigationBarOriginal-container-scrolled': this.state.scrolled })} key='NavigationBar-original'>
        <ul id='NavigationBarOriginal-ul'>
          <div id='NavigationBarOriginal-li-container-left'>
            <Link className='NavigationBarOriginal-li' to='/'><li >Leagues</li></Link>
            <Link className='NavigationBarOriginal-li' to='/standings'><li>Standings</li></Link>
            <Link className='NavigationBarOriginal-li' to='/stats'><li>Stats</li></Link>
          </div>
          <li id='NavigationBarOriginal-logo'><Link to='/'><img src={require('../../assets/images/logos/fcs_logo.png')} alt='Focus Esports Logo'/></Link></li>
          <div id='NavigationBarOriginal-li-container-right'>
            <Link className='NavigationBarOriginal-li' to='/about'><li>About Us</li></Link>
            <a className='NavigationBarOriginal-li' href='https://getpryde.com/focus/' target='_blank'><li>Store</li></a>
            <Link className='NavigationBarOriginal-li' to='/connect'><li>Connect</li></Link>
          </div>
        </ul>
      </div>,
      <div className={classnames('NavigationBarScrolled-container', { 'NavigationBarScrolled-container-scrolled': this.state.scrolled })} key='NavigationBar-scrolled'>
      <ul id='NavigationBarScrolled-ul'>
        <li id='NavigationBarScrolled-logo'><Link to='/'><img src={require('../../assets/images/logos/full_logo.png')} alt='Focus Esports Logo'/></Link></li>
        <div id='NavigationBarScrolled-li-container-right'>
          <Link id='NavigationBarScrolled-li-first' className='NavigationBarScrolled-li' to='/'><li >Leagues</li></Link>
          <Link className='NavigationBarScrolled-li' to='/standings'><li>Standings</li></Link>
          <Link className='NavigationBarScrolled-li' to='/stats'><li>Stats</li></Link>
          <Link className='NavigationBarScrolled-li' to='/about'><li>About Us</li></Link>
          <a className='NavigationBarScrolled-li' href='https://getpryde.com/focus/' target='_blank'><li>Store</li></a>
          <Link id='NavigationBarScrolled-li-last' className='NavigationBarScrolled-li' to='/connect'><li>Connect</li></Link>
        </div>
      </ul>
      </div>,
      <div id='NavigationBar-spacer' key='spacer'></div>
    ];
  }
}

export default NavigationBar;
