const initialState = {
  sort: 'ier',
  direction: 'descending'
}

const statsContainer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_SORT:
      return {...state, sort: action.sort}
    case CHANGE_DIRECTION:
      return {...state, direction: action.direction}
    default:
      return state;
  }
}

const CHANGE_SORT = 'CHANGE_SORT';
const changeSort = (sort) => {
  return {
    type: CHANGE_SORT,
    sort: sort
  }
}

const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
const changeDirection = (direction) => {
  return {
    type: CHANGE_DIRECTION,
    direction: direction
  }
}

const handleSort = (event, desiredSort) => {
  return (dispatch, getState) => {
    let direction;
    desiredSort === getState().statsContainer.sort ? (getState().statsContainer.direction === 'ascending' ? direction = 'descending' : direction = 'ascending') : (direction = 'ascending')
    dispatch(changeDirection(direction));
    dispatch(changeSort(desiredSort));
    switch(desiredSort) {
      case 'name':
        getState().leagueData.players.sort(function(a, b) { return (direction === 'ascending' ? a.name < b.name : b.name < a.name) ? -1 : (direction === 'ascending' ? a.name > b.name : b.name > a.name) ? 1 : 0; });
        break;
      case 'teamName':
        getState().leagueData.players.sort(function(a, b) {
          let aTeam;
          a.team_id === null ? aTeam = 'N/A' : aTeam = a.team.name;
          let bTeam;
          b.team_id === null ? bTeam = 'N/A' : bTeam = b.team.name;
          return (direction === 'ascending' ? aTeam < bTeam : bTeam < aTeam) ? -1 : (direction === 'ascending' ? aTeam > bTeam : bTeam > aTeam) ? 1 : 0; });
        break;
      case 'role':
        getState().leagueData.players.sort(function(a, b) { return (direction === 'ascending' ? a.role < b.role : b.role < a.role) ? -1 : (direction === 'ascending' ? a.role > b.role : b.role > a.role) ? 1 : 0; });
        break;
      case 'kills':
        getState().leagueData.players.sort((a, b) => parseFloat(direction === 'ascending' ? a.kills : b.kills) - parseFloat(direction === 'ascending' ? b.kills : a.kills));
        break;
      case 'deaths':
        getState().leagueData.players.sort((a, b) => parseFloat(direction === 'ascending' ? a.deaths : b.deaths) - parseFloat(direction === 'ascending' ? b.deaths : a.deaths));
        break;
      case 'assists':
        getState().leagueData.players.sort((a, b) => parseFloat(direction === 'ascending' ? a.assists : b.assists) - parseFloat(direction === 'ascending' ? b.assists : a.assists));
        break;
      case 'kda':
        getState().leagueData.players.sort((a, b) => parseFloat(direction === 'ascending' ? ((a.kills + a.assists) / a.deaths) : ((b.kills + b.assists) / b.deaths)) - parseFloat(direction === 'ascending' ? ((b.kills + b.assists) / b.deaths) : ((a.kills + a.assists) / a.deaths)));
        break;
      case 'gamesPlayed':
        getState().leagueData.players.sort((a, b) => parseFloat(direction === 'ascending' ? a.games_played : b.games_played) - parseFloat(direction === 'ascending' ? b.games_played : a.games_played));
        break;
      case 'ier':
        getState().leagueData.players.sort((a, b) => parseFloat(direction === 'ascending' ? a.ier : b.ier) - parseFloat(direction === 'ascending' ? b.ier : a.ier));
        break;
      default:
        break;
    }
  }
}

export {
  statsContainer,
  handleSort
}
