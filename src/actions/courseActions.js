import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

export function createCourse(course) {
  return {type: types.CREATE_COURSE, course};
}
export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}
export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(err => {
      throw(err);
    });
  };
}

export function saveCourse(course) {
  //can use getState to access the redux store
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)): dispatch(createCourseSuccess(savedCourse));
    }).catch(err => {
      dispatch(ajaxCallError());
      throw(err);
    });
  };
}
