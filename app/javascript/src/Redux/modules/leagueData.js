const initialState = {
  league: 'FCS',
  minRank: 'Diamond',
  maxRank: 'Challenger',
  teams: [],
  players: [],
  isFetching: false
}

const leagueData = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA_REQUEST:
      return {...state, isFetching: true }
    case GET_DATA_REQUEST_SUCCESS:
      return {...state, isFetching: false}
    case GET_DATA_REQUEST_FAILURE:
      return {...state, isFetching: false }
    case SET_DATA:
      return {...state, minRank: action.minRank, maxRank: action.maxRank, teams: action.teams, players: action.players }
    case CHANGE_LEAGUE:
      return {...state, league: action.desiredLeague}
    default:
      return state;
  }
}

const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST
  }
}

const GET_DATA_REQUEST_SUCCESS = 'GET_DATA_REQUEST_SUCCESS';
const getDataRequestSuccess = () => {
  return {
    type: GET_DATA_REQUEST_SUCCESS
  }
}

const GET_DATA_REQUEST_FAILURE = 'GET_DATA_REQUEST_FAILURE';
const getDataRequestFailure = () => {
  return {
    type: GET_DATA_REQUEST_FAILURE
  }
}

const SET_DATA = 'SET_DATA';
const setData = (minRank, maxRank, teams, players) => {
  return {
    type: SET_DATA,
    minRank: minRank,
    maxRank: maxRank,
    teams: teams,
    players: players
  }
}

const CHANGE_LEAGUE = 'CHANGE_LEAGUE';
const changeLeague = (desiredLeague) => {
  return {
    type: CHANGE_LEAGUE,
    desiredLeague: desiredLeague
  }
}

const getData = () => {
  return (dispatch, getState) => {
    dispatch(getDataRequest());
    return fetch(`/api/v1/league/${getState().leagueData.league.toLowerCase()}`)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        dispatch(getDataRequestFailure());
      }
    })
    .then(response => {
      if(!response.error) {
        response.players.sort((a, b) => parseFloat(b.impact_efficiency_rating) - parseFloat(a.impact_efficiency_rating));
        dispatch(setData(response.min_rank, response.max_rank, response.teams, response.players));
        dispatch(getDataRequestSuccess());
      }
    })
  }
}

const handleLeagueChange = (event, desiredLeague) => {
  return (dispatch, getState) => {
    if (desiredLeague !== getState().leagueData.league) {
      dispatch(changeLeague(desiredLeague));
      dispatch(getData());
    }
  }
}

export {
  leagueData,
  getData,
  handleLeagueChange
}
