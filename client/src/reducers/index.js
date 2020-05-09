import { combineReducers } from 'redux';
import isLoggedInReducer from './IsLoggedInReducer';
import isLoggedInUserReducer from './logInUserReducer';
import isLoggedInOrgReducer from './logInOrgReducer';
import eventListSelectorReducer from './eventListSelectorReducer';

const allReducers = combineReducers(
  {
    isLoggedIn: isLoggedInReducer,
    orgId: isLoggedInOrgReducer,
    userId: isLoggedInUserReducer,
    eventSelection: eventListSelectorReducer,
  }
);

export default allReducers;