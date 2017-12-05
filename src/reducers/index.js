import {combineReducers} from 'redux';
import courses from './courseReducer'; //Short hand property name ES6
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors
});

export default rootReducer;
