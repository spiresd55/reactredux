import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

//integration test for store

describe('Store', () => {
  it('Should handle creating courses', function() {
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean code'
    };

    //act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    //assert
    const actual = store.getState().courses[0];
    const expected = {
      title: 'Clean Code'
    };

    expect(actual, expected);
  });
});
