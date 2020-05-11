import { combineReducers } from 'redux';
import isLoggedInReducer from './IsLoggedInReducer';
import isLoggedInUserReducer from './logInUserReducer';
import isLoggedInOrgReducer from './logInOrgReducer';
import eventListSelectorReducer from './eventListSelectorReducer';
import allEventsListReducer from './allEventsListReducer';
import myEventsListReducer from './myEventsListReducer';
import tagsReducer from './tagsReducer';
import userInfoReducer from './userInfoReducer';
import orgInfoReducer from './orgInfoReducer';

const allReducers = combineReducers({
  isLoggedIn: isLoggedInReducer,
  orgId: isLoggedInOrgReducer,
  userId: isLoggedInUserReducer,
  eventSelection: eventListSelectorReducer,
  // eventSelectionButton: eventListSelectorReducer
  tags: tagsReducer,
  orgInfo: orgInfoReducer,
  userInfo: userInfoReducer,
  allEvents: allEventsListReducer,
  myEvents: myEventsListReducer,
  allEventsList: allEventsListReducer,
  myEventsList: myEventsListReducer
});

export default allReducers;
