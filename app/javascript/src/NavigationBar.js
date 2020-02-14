import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleNavigation, handleDropdown, handleOutsideClick } from './Redux/modules/navigationBar';
import { handleLeagueChange } from './Redux/modules/leagueData';
import { Icon } from 'semantic-ui-react';

var classNames = require('classnames');

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', this.props.handleOutsideClick);
    this.props.handleNavigation(null, window.location.pathname);
  }

  render() {
    return [
      <div id='NavigationBar-container' key='navbar'>
        <div id='NavigationBar-container-left'>
          <Link to='/' id='NavigationBar-left-logo' onClick={event => this.props.handleNavigation(event, '/')}><img id='NavigationBar-logo' src={require('../../assets/images/logos/full_purple.png')} alt='Focus Esports Logo'/></Link>
        </div>
        <div id='NavigationBar-container-right'>
          <div className='NavigationBar-right-item Navigationbar-dropdown-button' onClick={this.props.handleDropdown}>{this.props.leagueName} {this.props.dropdown ? (<Icon id='NavigationBar-dropdown-icon' name='dropdown' flipped='vertically'/>) : (<Icon id='NavigationBar-dropdown-icon' name='dropdown'/>)}</div>
          <Link to='/standings' className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.props.path === '/standings' })} onClick={event => this.props.handleNavigation(event, '/standings')}>Standings</Link>
          <Link to='/stats' className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.props.path === '/stats' })} onClick={event => this.props.handleNavigation(event, '/stats')}>Stats</Link>
          <Link to='/about' className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.props.path === '/about' })} onClick={event => this.props.handleNavigation(event, '/about')}>About Us</Link>
          <a className='NavigationBar-right-item' href='https://getpryde.com/focus/' target='_blank'>Shop</a>
        </div>
      </div>,
      <div id='NavigationBar-spacer' key='spacer'></div>,
      <div className={classNames('NavigationBar-dropdown-container', { 'NavigationBar-dropdown-container-hidden': !this.props.dropdown })} key='dropdown'>
        <div className={classNames('NavigationBar-dropdown-item', { 'NavigationBar-dropdown-active': this.props.leagueName === 'FCS' })} onClick={event => this.props.handleLeagueChange(event, 'FCS')}>FCS</div>
        <div className={classNames('NavigationBar-dropdown-item', { 'NavigationBar-dropdown-active': this.props.leagueName === 'Propel' })} onClick={event => this.props.handleLeagueChange(event, 'Propel')}>Propel</div>
        <div className={classNames('NavigationBar-dropdown-item', { 'NavigationBar-dropdown-active': this.props.leagueName === 'Aspire' })} onClick={event => this.props.handleLeagueChange(event, 'Aspire')}>Aspire</div>
      </div>
    ];
  }
}

const mapStateToProps = (state) => {
  return {
    path: state.navigationBar.path,
    dropdown: state.navigationBar.dropdown,
    leagueName: state.leagueData.leagueName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNavigation: (event, destination) => dispatch(handleNavigation(event, destination)),
    handleDropdown: () => dispatch(handleDropdown()),
    handleOutsideClick: (event) => dispatch(handleOutsideClick(event)),
    handleLeagueChange: (event, desiredLeague) => dispatch(handleLeagueChange(event, desiredLeague))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
