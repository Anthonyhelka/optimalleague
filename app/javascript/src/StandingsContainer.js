import React, { Component } from 'react';
import { connect } from 'react-redux';

import StandingsTile from './StandingsTile';
import loading_gears from '../../assets/images/miscellaneous_images/loading_gears_black.svg';

class StandingsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let teams = this.props.teams.map(team => {
      return (
        <StandingsTile
          key={team.id}
          id={team.id}
          name={team.name}
          group={team.group}
          wins={team.wins}
          losses={team.losses}
          players={team.players}
        />
      )
    });

    return (
      <div>
        {this.props.isFetching ? (
          <div>
            <h1>{this.props.league}</h1>
            <h3>{this.props.minRank} - {this.props.maxRank}</h3>
            <div>
              <h3>Teams</h3>
              {teams}
            </div>
          </div>
        ) : (
          <div>
            <img src={loading_gears} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    league: state.leagueData.league,
    minRank: state.leagueData.minRank,
    maxRank: state.leagueData.maxRank,
    teams: state.leagueData.teams,
    isFetching: state.leagueData.isFetching
  }
}

export default connect(
  mapStateToProps,
  null
)(StandingsContainer);
