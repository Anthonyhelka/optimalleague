import React, { Component } from 'react';
import classes from './NavigationBar.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleNavigation, handleDropdown, handleOutsideClick } from '../Redux/modules/navigationBar.js';
import { handleLeagueChange } from '../Redux/modules/leagueData.js';
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
      <div className={classes.container} key='navbar'>
        <div className={classes.columnLeft}>
          <Link to='/' className={classes.logo} onClick={event => this.props.handleNavigation(event, '/')}><img src={require('../../../assets/images/logos/full_purple.png')} alt='Focus Esports Logo'/></Link>
        </div>
        <div className={classes.columnRight}>
          <div className={[classes.rightButton, classes.dropdownButton].join('')} onClick={this.props.handleDropdown}>{this.props.leagueName} {this.props.dropdown ? (<Icon className={classes.dropdownIcon} name='dropdown' flipped='vertically'/>) : (<Icon className={classes.dropdownIcon}  name='dropdown'/>)}</div>
          <Link to='/standings' className={classNames(classes.rightButton, { [classes.activeButton]: this.props.path === '/standings' })} onClick={event => this.props.handleNavigation(event, '/standings')}>Standings</Link>
          <Link to='/stats' className={classNames(classes.rightButton, { [classes.activeButton]: this.props.path === '/stats' })} onClick={event => this.props.handleNavigation(event, '/stats')}>Stats</Link>
          <Link to='/about' className={classNames(classes.rightButton, { [classes.activeButton]: this.props.path === '/about' })} onClick={event => this.props.handleNavigation(event, '/about')}>About Us</Link>
          <a className={classes.rightButton} href='https://getpryde.com/focus/' target='_blank'>Shop</a>
        </div>
      </div>,
      <div className={classes.spacer} key='spacer'></div>,
      <div className={classNames(classes.dropdownContainer, { [classes.dropdownContainerHidden]: !this.props.dropdown })} key='dropdown'>
        <div className={classNames(classes.dropdownItem, { [classes.dropdownItemActive]: this.props.leagueName === 'FCS' })} onClick={event => this.props.handleLeagueChange(event, 'FCS')}>FCS</div>
        <div className={classNames(classes.dropdownItem, { [classes.dropdownItemActive]: this.props.leagueName === 'Propel' })} onClick={event => this.props.handleLeagueChange(event, 'Propel')}>Propel</div>
        <div className={classNames(classes.dropdownItem, { [classes.dropdownItemActive]: this.props.leagueName === 'Aspire' })} onClick={event => this.props.handleLeagueChange(event, 'Aspire')}>Aspire</div>
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
