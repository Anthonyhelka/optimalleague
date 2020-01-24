import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

var classNames = require('classnames');

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      leagues: false,
      standings: false,
      stats: false,
      about: false,
      dropdown: false,
      fcs: true,
      propel: false,
      aspire: false,
      currentLeague: 'FCS'
    }
    this.handleCurrentPage = this.handleCurrentPage.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleLeagueDropdown = this.handleLeagueDropdown.bind(this);
    this.handleLeagueChange = this.handleLeagueChange.bind(this);
    this.handleOutsideDropdownClick = this.handleOutsideDropdownClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideDropdownClick);
    this.handleCurrentPage(window.location.pathname);
  }

  handleCurrentPage(pathname) {
    switch(pathname) {
      case '/':
        this.setState({ home: true, leagues: false, standings: false, stats: false, about: false });
        break;
      case '/home':
        this.setState({ home: true, leagues: false, standings: false, stats: false, about: false  });
        break;
      case '/leagues':
        this.setState({ home: false, leagues: true, standings: false, stats: false, about: false  });
        break;
      case '/standings':
        this.setState({ home: false, leagues: false, standings: true, stats: false, about: false  });
        break;
      case '/stats':
        this.setState({ home: false, leagues: false, standings: false, stats: true, about: false  });
        break;
      case '/about':
        this.setState({ home: false, leagues: false, standings: false, stats: false, about: true  });
        break;
      default:
        this.setState({ home: false, leagues: false, standings: false, stats: false, about: false  });
        break;
    }
  }

  handlePageChange(event, pathname) {
    this.handleCurrentPage(pathname);
    this.props.history.push(pathname);
  }

  handleLeagueDropdown() {
    this.setState({ dropdown: !this.state.dropdown })
  }

  handleLeagueChange(event, league) {
    switch(league) {
      case 'fcs':
        this.setState({ fcs: true, propel: false, aspire: false, currentLeague: 'FCS' });
        break;
      case 'propel':
        this.setState({ fcs: false, propel: true, aspire: false, currentLeague: 'Propel' });
        break;
      case 'aspire':
        this.setState({ fcs: false, propel: false, aspire: true, currentLeague: 'Aspire' });
        break;
      default:
        this.setState({ fcs: true, propel: false, aspire: false, currentLeague: 'FCS' });
      break;
    }
  }

  handleOutsideDropdownClick() {
    if (!event.target.className.includes('NavigationBar') && !event.target.id.includes('NavigationBar')) {
      this.setState({ dropdown: false });
    }
  }

  render() {
    return [
      <div id='NavigationBar-container' key='navbar'>
        <div id='NavigationBar-container-left'>
          <div id='NavigationBar-left-logo' className={classNames({ 'NavigationBar-active': this.state.home })} onClick={event => this.handlePageChange(event, '/')}><img id='NavigationBar-logo' src={require('../../assets/images/logos/full_purple.png')} alt='Focus Esports Logo'/></div>
        </div>
        <div id='NavigationBar-container-right'>
          <div className='NavigationBar-right-item Navigationbar-dropdown-button' onClick={this.handleLeagueDropdown}>{this.state.currentLeague} {this.state.dropdown ? (<Icon id='NavigationBar-dropdown-icon' name='dropdown' flipped='vertically'/>) : (<Icon id='NavigationBar-dropdown-icon' name='dropdown'/>)}</div>
          <div className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.state.standings })} onClick={event => this.handlePageChange(event, '/standings')}>Standings</div>
          <div className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.state.stats })} onClick={event => this.handlePageChange(event, '/stats')}>Stats</div>
          <div className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.state.about })} onClick={event => this.handlePageChange(event, '/about')}>About Us</div>
          <a className='NavigationBar-right-item' href='https://getpryde.com/focus/' target='_blank'>Shop</a>
        </div>
      </div>,
      <div id='NavigationBar-spacer' key='spacer'></div>,
      <div className={classNames('NavigationBar-dropdown-container', { 'NavigationBar-dropdown-container-hidden': !this.state.dropdown })} key='dropdown'>
        <div className={classNames('NavigationBar-dropdown-item', { 'NavigationBar-dropdown-active': this.state.fcs })} onClick={event => this.handleLeagueChange(event, 'fcs')}>FCS</div>
        <div className={classNames('NavigationBar-dropdown-item', { 'NavigationBar-dropdown-active': this.state.propel })} onClick={event => this.handleLeagueChange(event, 'propel')}>Propel</div>
        <div className={classNames('NavigationBar-dropdown-item', { 'NavigationBar-dropdown-active': this.state.aspire })} onClick={event => this.handleLeagueChange(event, 'aspire')}>Aspire</div>
      </div>
    ];
  }
}

export default withRouter(NavigationBar);
