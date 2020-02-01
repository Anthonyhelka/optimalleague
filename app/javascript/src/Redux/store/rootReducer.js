import { combineReducers } from 'redux';

import { navigationBar } from '../modules/navigationBar';
import { leagueData } from '../modules/leagueData';
import { statsContainer } from '../modules/statsContainer';

const rootReducer = combineReducers({
  navigationBar,
  leagueData,
  statsContainer
});

export default rootReducer;
