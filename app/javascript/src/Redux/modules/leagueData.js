const initialState = {
  league: 'FCS'
}

const leagueData = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_LEAGUE_LEAGUE:
      return {...state, league: action.desiredLeague}
    default:
      return state;
  }
}

const HANDLE_LEAGUE_LEAGUE = 'HANDLE_LEAGUE_LEAGUE';
const handleLeagueChange = (event, desiredLeague) => {
  return {
    type: HANDLE_LEAGUE_LEAGUE,
    desiredLeague: desiredLeague
  }
}


export {
  leagueData,
  handleLeagueChange
}
