import { combineReducers } from 'redux';
import isLoggedInReducer from './IsLoggedInReducer';
import isLoggedInUserReducer from './logInUserReducer';
import isLoggedInOrgReducer from './logInOrgReducer';
import eventListSelectorReducer from './eventListSelectorReducer';
import tagsReducer from './tagsReducer';
import userInfoReducer from './userInfoReducer';
import orgInfoReducer from './orgInfoReducer';

const allReducers = combineReducers({
  isLoggedIn: isLoggedInReducer,
  orgId: isLoggedInOrgReducer,
  userId: isLoggedInUserReducer,
  eventSelection: eventListSelectorReducer,
  tags: tagsReducer,
  orgInfo: orgInfoReducer,
  userInfo: userInfoReducer,
});

export default allReducers;
