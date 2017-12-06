import {combineReducers} from 'redux';
import courses from './courseReducer'; //Short hand property name ES6
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
