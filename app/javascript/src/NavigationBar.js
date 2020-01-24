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
          <Link to='/' id='NavigationBar-left-logo' className={classNames({ 'NavigationBar-active': this.props.home })} onClick={event => this.props.handleNavigation(event, '/')}><img id='NavigationBar-logo' src={require('../../assets/images/logos/full_purple.png')} alt='Focus Esports Logo'/></Link>
        </div>
        <div id='NavigationBar-container-right'>
          <div className='NavigationBar-right-item Navigationbar-dropdown-button' onClick={this.props.handleDropdown}>{this.props.league} {this.props.dropdown ? (<Icon id='NavigationBar-dropdown-icon' name='dropdown' flipped='vertically'/>) : (<Icon id='NavigationBar-dropdown-icon' name='dropdown'/>)}</div>
          <Link to='/standings' className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.props.standings })} onClick={event => this.props.handleNavigation(event, '/standings')}>Standings</Link>
          <Link to='/stats' className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.props.stats })} onClick={event => this.props.handleNavigation(event, '/stats')}>Stats</Link>
          <Link to='/about' className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.props.about })} onClick={event => this.props.handleNavigation(event, '/about')}>About Us</Link>
          <a className='NavigationBar-right-item' href='https://getpryde.com/focus/' target='_blank'>Shop</a>
        </div>
      </div>,

      <div id='NavigationBar-spacer' key='spacer'></div>,

      <div className={classNames('NavigationBar-dropdown-container', { 'NavigationBar-dropdown-container-hidden': !this.props.dropdown })} key='dropdown'>
        <div className={classNames('NavigationBar-dropdown-item', { 'NavigationBar-dropdown-active': this.props.league === 'FCS' })} onClick={event => this.props.handleLeagueChange(event, 'FCS')}>FCS</div>
        <div className={classNames('NavigationBar-dropdown-item', { 'NavigationBar-dropdown-active': this.props.league === 'Propel' })} onClick={event => this.props.handleLeagueChange(event, 'Propel')}>Propel</div>
        <div className={classNames('NavigationBar-dropdown-item', { 'NavigationBar-dropdown-active': this.props.league === 'Aspire' })} onClick={event => this.props.handleLeagueChange(event, 'Aspire')}>Aspire</div>
      </div>
    ];
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.navigationBar.home,
    standings: state.navigationBar.standings,
    stats: state.navigationBar.stats,
    about: state.navigationBar.about,
    dropdown: state.navigationBar.dropdown,
    league: state.leagueData.league
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
