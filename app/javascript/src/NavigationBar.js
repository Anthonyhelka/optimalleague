import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

var classNames = require('classnames');

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      leagues: false,
      standings: false,
      stats: false,
      about: false
    }
    this.handleCurrentPage = this.handleCurrentPage.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
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

  render() {
    return [
      <div id='NavigationBar-container' key='navbar'>
        <div id='NavigationBar-container-left'>
          <div id='NavigationBar-left-logo' className={classNames({ 'NavigationBar-active': this.state.home })} onClick={event => this.handlePageChange(event, '/')}><img src={require('../../assets/images/logos/full_purple.png')} alt='Focus Esports Logo'/></div>
        </div>
        <div id='NavigationBar-container-right'>
          <div className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.state.leagues })} onClick={event => this.handlePageChange(event, '/')}>Leagues</div>
          <div className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.state.standings })} onClick={event => this.handlePageChange(event, '/standings')}>Standings</div>
          <div className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.state.stats })} onClick={event => this.handlePageChange(event, '/stats')}>Stats</div>
          <div className={classNames('NavigationBar-right-item', { 'NavigationBar-active': this.state.about })} onClick={event => this.handlePageChange(event, '/about')}>About Us</div>
          <a className='NavigationBar-right-item' href='https://getpryde.com/focus/' target='_blank'>Shop</a>
        </div>
      </div>,
      <div id='NavigationBar-spacer' key='spacer'></div>
    ];
  }
}

export default withRouter(NavigationBar);
