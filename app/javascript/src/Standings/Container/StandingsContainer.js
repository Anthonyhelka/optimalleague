import React, { Component } from 'react';
import classes from './StandingsContainer.module.scss';
import { connect } from 'react-redux';
import GroupContainer from '../Group/GroupContainer.js';
import loading_gears from '../../../../assets/images/miscellaneous_images/loading_gears_white.svg';

const StandingsContainer = (props) => {
  const pathToLeagueLogo = require.context('../../../../assets/images/logos', true);
  let groups = props.groups.map(group => {
    return (
      <GroupContainer
        key={group.id}
        name={group.name}
        teams={group.teams.slice().sort((a, b) => parseFloat((a.wins + a.losses) / a.wins) - parseFloat((b.wins + b.losses) / b.wins))}
      />
    )
  });

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <img className={classes.leagueLogo} src={`${pathToLeagueLogo(`./${(props.leagueName).toLowerCase()}_blue`, true)}`} alt={`${props.leagueName} League Logo`} />
      </div>
      {!props.isFetching ? (
        <div className={classes.groupsContainer}>
          {groups}
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

const mapStateToProps = (state) => {
  return {
    leagueName: state.leagueData.leagueName,
    minRank: state.leagueData.minRank,
    maxRank: state.leagueData.maxRank,
    groups: state.leagueData.groups,
    isFetching: state.leagueData.isFetching
  }
}

export default connect(
  mapStateToProps,
  null
)(StandingsContainer);
