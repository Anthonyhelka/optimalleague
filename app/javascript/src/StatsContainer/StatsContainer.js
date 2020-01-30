import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSort } from '../Redux/modules/statsContainer';
import { Icon } from 'semantic-ui-react';
import StatsTile from './StatsTile';
import loading_gears from '../../../assets/images/miscellaneous_images/loading_gears_black.svg';

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
                <th onClick={event => this.props.handleSort(event, 'name')}>Name&nbsp;{this.props.sort === 'name' ? (<Icon name={`sort ${this.props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
                <th onClick={event => this.props.handleSort(event, 'teamName')}>Team&nbsp;{this.props.sort === 'teamName' ? (<Icon name={`sort ${this.props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
                <th onClick={event => this.props.handleSort(event, 'kills')}>Kills&nbsp;{this.props.sort === 'kills' ? (<Icon name={`sort ${this.props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
                <th onClick={event => this.props.handleSort(event, 'deaths')}>Deaths&nbsp;{this.props.sort === 'deaths' ? (<Icon name={`sort ${this.props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
                <th onClick={event => this.props.handleSort(event, 'assists')}>Assists&nbsp;{this.props.sort === 'assists' ? (<Icon name={`sort ${this.props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
                <th onClick={event => this.props.handleSort(event, 'kda')}>KDA&nbsp;{this.props.sort === 'kda' ? (<Icon name={`sort ${this.props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
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
