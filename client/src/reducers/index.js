import { combineReducers } from 'redux';
import isLoggedInUserReducer from './logInUserReducer';
import isLoggedInOrgReducer from './logInOrgReducer';
import eventListSelectorReducer from './eventListSelectorReducer';
import allEventsListReducer from './allEventsListReducer';
import myEventsListReducer from './myEventsListReducer';
import tagsReducer from './tagsReducer';
import userInfoReducer from './userInfoReducer';
import orgInfoReducer from './orgInfoReducer';
import searchedEventListReducer from './searchedEventsListReducer';
import orgEventListReducer from './orgEventListReducer';
import currentEventInfoReducer from './currentEventInfoReducer';

const allReducers = combineReducers({
  orgId: isLoggedInOrgReducer,
  userId: isLoggedInUserReducer,
  eventSelection: eventListSelectorReducer,
  eventSelectionButton: eventListSelectorReducer,
  tags: tagsReducer,
  orgInfo: orgInfoReducer,
  userInfo: userInfoReducer,
  allEvents: allEventsListReducer,
  myEvents: myEventsListReducer,
  allEventsList: allEventsListReducer,
  myEventsList: myEventsListReducer,
  searchedEventsList: searchedEventListReducer,
  orgEventsList: orgEventListReducer,
  currentEventInfo: currentEventInfoReducer,
});

export default allReducers;
