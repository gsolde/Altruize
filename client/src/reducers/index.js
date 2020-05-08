import { combineReducers } from 'redux';
import isLoggedInReducer from './IsLoggedInReducer';
import isLoggedInUserReducer from './logInUserReducer';
import isLoggedInOrgReducer from './logInOrgReducer';

const allReducers = combineReducers(
  {
    isLoggedIn: isLoggedInReducer,
    orgId: isLoggedInOrgReducer,
    userId: isLoggedInUserReducer
  }
);

export default allReducers;