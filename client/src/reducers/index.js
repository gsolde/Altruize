import { combineReducers } from 'redux';
import isLoggedInReducer from './IsLoggedInReducer';

const allReducers = combineReducers(
  {
    isLoggedIn: isLoggedInReducer,
  }
);
export default allReducers;