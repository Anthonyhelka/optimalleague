import { combineReducers } from 'redux';

import { navigationBar } from '../modules/navigationBar';
import { leagueData } from '../modules/leagueData';

const rootReducer = combineReducers({
  navigationBar,
  leagueData
});

export default rootReducer;
