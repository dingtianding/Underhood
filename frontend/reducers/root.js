import { combineReducers } from 'redux';
import sessionReducer from './session';
import sessionErrorsReducer from './session_errors';

const rootReducer = combineReducers({
//   entities: entitiesReducer,
  session: sessionReducer,
  sessionerr: sessionErrorsReducer,
});

export default rootReducer;