import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve();}},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>); //USing mount creates a InDom for connected components
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');

    //Simulate click
    saveButton.simulate('click');
    console.log(wrapper.state().course);
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    console.log(wrapper.state());
  });
});
