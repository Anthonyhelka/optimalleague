import React, { Component } from 'react';
import classes from './StandingsContainer.module.scss';
import { connect } from 'react-redux';
import StandingsTile from '../StandingsTile.js';
import loading_gears from '../../../../assets/images/miscellaneous_images/loading_gears_white.svg';

class StandingsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    let teams = this.props.teams.map(team => {
      return (
        <StandingsTile
          key={team.id}
          id={team.id}
          name={team.name}
          group={team.group}
          wins={team.wins}
          losses={team.losses}
          roster={team.roster}
        />
      )
    });

    return (
      <div className={classes.container}>
        <h1>{this.props.league}</h1>
        {!this.props.isFetching ? (
          <div>
            <h3>{this.props.minRank} - {this.props.maxRank}</h3>
            <div>
              <h3>Teams</h3>
              {teams}
            </div>
          </div>
        ) : (
          <div className={classes.loadingContainer}>
            <img className={classes.loadingSpinner} src={loading_gears} />
            <span className={classes.loadingText}>We are fetching data, please be patient!</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leagueName: state.leagueData.leagueName,
    minRank: state.leagueData.minRank,
    maxRank: state.leagueData.maxRank,
    leagueGroups: state.leagueData.groups,
    teams: state.leagueData.teams,
    isFetching: state.leagueData.isFetching
  }
}

export default connect(
  mapStateToProps,
  null
)(StandingsContainer);
