import React from 'react';
import { connect } from 'react-redux';
import { handleSort } from '../Redux/modules/statsContainer';
import { Icon, Popup } from 'semantic-ui-react';

import LeaderboardContainer from './LeaderboardContainer';
import PlayerTile from './PlayerTile';
import loading_gears from '../../../assets/images/miscellaneous_images/loading_gears_white.svg';

const StatsContainer = (props) => {
  const pathToLeagueLogo = require.context('../../../assets/images/logos', true);
  let players = props.players.map(player => {
    return (
      <PlayerTile
        key={player.id}
        id={player.id}
        name={player.name}
        teamName={player.team.name}
        role={player.role}
        kills={player.kills}
        deaths={player.deaths}
        assists={player.assists}
        gamesPlayed={player.games_played}
        ier={player.ier}
      />
    )
  });
  return (
    <div id='StatsContainer-container'>
      <div id='StatsContainer-title-container'>
        <img id='StatsContainer-logo' src={`${pathToLeagueLogo(`./${(props.leagueName).toLowerCase()}_blue`, true)}`} alt={`${props.leagueName} League Logo`} />
      </div>
      {!props.isFetching ? [
        <div id='StatsContainer-leadboard-container' key='leadeboards'>
          <LeaderboardContainer key='kills' stat='Kills' players={props.players.sort((a, b) => parseFloat(b.kills) - parseFloat(a.kills) || parseFloat((b.kills + b.assists) / b.deaths) - parseFloat((a.kills + a.assists) / a.deaths)).slice(0,5)} />
          <LeaderboardContainer key='assists' stat='Assists' players={props.players.sort((a, b) => parseFloat(b.assists) - parseFloat(a.assists) || parseFloat((b.kills + b.assists) / b.deaths) - parseFloat((a.kills + a.assists) / a.deaths)).slice(0,5)} />
          <LeaderboardContainer key='kda' stat='KDA' players={props.players.sort((a, b) => parseFloat((b.kills + b.assists) / b.deaths) - parseFloat((a.kills + a.assists) / a.deaths) || parseFloat(b.kills) - parseFloat(a.kills)).slice(0,5)} />
          <LeaderboardContainer key='ier' stat='IER' players={props.players.sort((a, b) => parseFloat(b.ier) - parseFloat(a.ier) || parseFloat((b.kills + b.assists) / b.deaths) - parseFloat((a.kills + a.assists) / a.deaths)).slice(0,5)} />
        </div>,
        <table id='StatsContainer-table' key='table'>
          <thead id='StatsContainer-header'>
            <tr id='StatsContainer-header-row'>
              <th className='StatsContainer-header-cell' onClick={event => props.handleSort(event, 'name')}>Name&nbsp;{props.sort === 'name' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
              <th className='StatsContainer-header-cell' onClick={event => props.handleSort(event, 'teamName')}>Team&nbsp;{props.sort === 'teamName' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
              <th className='StatsContainer-header-cell' onClick={event => props.handleSort(event, 'role')}>Role&nbsp;{props.sort === 'role' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
              <th className='StatsContainer-header-cell' onClick={event => props.handleSort(event, 'kills')}>Kills&nbsp;{props.sort === 'kills' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
              <th className='StatsContainer-header-cell' onClick={event => props.handleSort(event, 'deaths')}>Deaths&nbsp;{props.sort === 'deaths' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
              <th className='StatsContainer-header-cell' onClick={event => props.handleSort(event, 'assists')}>Assists&nbsp;{props.sort === 'assists' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
              <th className='StatsContainer-header-cell' onClick={event => props.handleSort(event, 'kda')}>KDA&nbsp;{props.sort === 'kda' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
              <th className='StatsContainer-header-cell' onClick={event => props.handleSort(event, 'gamesPlayed')}>Games&nbsp;{props.sort === 'gamesPlayed' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
              <Popup content='Impact Efficiency Rating' basic inverted trigger={<th className='StatsContainer-header-cell' onClick={event => props.handleSort(event, 'ier')}>IER&nbsp;{props.sort === 'ier' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>} />
            </tr>
          </thead>
          <tbody id='StatsContainer-body'>
            {players}
          </tbody>
        </table>,
        <div id='StatsContainer-all-stats-container' key='statsUrl'>
          <a id='StatsContainer-all-stats-text' href={props.statsUrl} target='_blank'>ALL STATS</a>
        </div>
      ] : (
        <div id='StatsContainer-loading-container'>
          <img id='StatsContainer-loading-gears' src={loading_gears} />
          <span id='StatsContainer-loading-text'>We are fetching data, please be patient!</span>
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
