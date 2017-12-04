import {combineReducers} from 'redux';
import courses from './courseReducer'; //Short hand property name ES6

const rootReducer = combineReducers({
  courses: courses
});

export default rootReducer;
