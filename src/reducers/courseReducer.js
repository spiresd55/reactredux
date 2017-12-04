import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      //Spread Operator ... shortcuts arrays as if i used a for each loops
      return [...state, Object.assign({},action.course)];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
