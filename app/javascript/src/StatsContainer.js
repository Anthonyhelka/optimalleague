import React, { Component } from 'react';
import { connect } from 'react-redux';

import StatsTile from './StatsTile';
import loading_gears from '../../assets/images/miscellaneous_images/loading_gears_black.svg';

class StatsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let players = this.props.players.map(player => {
      return (
        <StatsTile
          key={player.id}
          id={player.id}
          name={player.name}
          teamName={player.team.name}
          kills={player.kills}
          deaths={player.deaths}
          assists={player.assists}
        />
      )
    });

    return (
      <div id='StatsContainer-container'>
        <h1>{this.props.league}</h1>
        {!this.props.isFetching ? (
          <table id='StatsContainer-table'>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Team</th>
                <th>Kills</th>
                <th>Deaths</th>
                <th>Assists</th>
                <th>KDA</th>
              </tr>
              {players}
            </tbody>
          </table>
        ) : (
          <div id='StandingsContainer-loading-container'>
            <img id='StandingsContainer-loading-gears' src={loading_gears} />
            <span id='StandingsContainer-loading-text'>We are fetching Team and Player data, please be patient!</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    league: state.leagueData.league,
    players: state.leagueData.players,
    isFetching: state.leagueData.isFetching
  }
}

export default connect(
  mapStateToProps,
  null
)(StatsContainer);
