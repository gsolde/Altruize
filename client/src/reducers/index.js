import { combineReducers } from 'redux';
import isLoggedInReducer from './IsLoggedInReducer';
import isLoggedInUserReducer from './logInUserReducer';
import isLoggedInOrgReducer from './logInOrgReducer';
import tagsReducer from './tagsReducer';

const allReducers = combineReducers(
  {
    isLoggedIn: isLoggedInReducer,
    orgId: isLoggedInOrgReducer,
    userId: isLoggedInUserReducer,
    getTags: tagsReducer,
  }
);

export default allReducers;