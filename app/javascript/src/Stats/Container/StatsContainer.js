import React from 'react';
import classes from './StatsContainer.module.css';
import { connect } from 'react-redux';
import { handleSort } from '../../Redux/modules/statsContainer.js';
import Leaderboard from '../Leaderboard/Leaderboard.js';
import PlayerTable from '../Table/PlayerTable.js';
import loading_gears from '../../../../assets/images/miscellaneous_images/loading_gears_white.svg';

const StatsContainer = (props) => {
  const pathToLeagueLogo = require.context('../../../../assets/images/logos', true);
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <img className={classes.leagueLogo} src={`${pathToLeagueLogo(`./${(props.leagueName).toLowerCase()}_blue`, true)}`} alt={`${props.leagueName} League Logo`} />
      </div>
      {!props.isFetching ? [
        <div className={classes.leaderboardContainer} key='leadeboards'>
          <Leaderboard key='kills' stat='Kills' players={props.players.slice(0).sort((a, b) => parseFloat(b.kills) - parseFloat(a.kills) || parseFloat((b.kills + b.assists) / b.deaths) - parseFloat((a.kills + a.assists) / a.deaths)).slice(0,5)} />
          <Leaderboard key='assists' stat='Assists' players={props.players.slice(0).sort((a, b) => parseFloat(b.assists) - parseFloat(a.assists) || parseFloat((b.kills + b.assists) / b.deaths) - parseFloat((a.kills + a.assists) / a.deaths)).slice(0,5)} />
          <Leaderboard key='kda' stat='KDA' players={props.players.slice(0).sort((a, b) => parseFloat((b.kills + b.assists) / b.deaths) - parseFloat((a.kills + a.assists) / a.deaths) || parseFloat(b.kills) - parseFloat(a.kills)).slice(0,5)} />
          <Leaderboard key='ier' stat='IER' players={props.players.slice(0).sort((a, b) => parseFloat(b.ier) - parseFloat(a.ier) || parseFloat((b.kills + b.assists) / b.deaths) - parseFloat((a.kills + a.assists) / a.deaths)).slice(0,5)} />
        </div>,
        <PlayerTable players={props.players} sort={props.sort} direction={props.direction} handleSort={props.handleSort} key='table' />,
        <div className={classes.allStatsContainer} key='statsUrl'>
          <a className={classes.allStatsText} href={props.statsUrl} target='_blank'>ALL STATS</a>
        </div>
      ] : (
        <div className={classes.loadingContainer} >
          <img className={classes.loadingSpinner}  src={loading_gears} />
          <span className={classes.loadingText} >We are fetching data, please be patient!</span>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    leagueName: state.leagueData.leagueName,
    statsUrl: state.leagueData.statsUrl,
    players: state.leagueData.players,
    isFetching: state.leagueData.isFetching,
    sort: state.statsContainer.sort,
    direction: state.statsContainer.direction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSort: (event, desiredSort) => dispatch(handleSort(event, desiredSort))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatsContainer);
