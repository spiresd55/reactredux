import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

//debugger; can be used in javascript to create breakpoints

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    //Initializing State
    this.state = {
      course: {title: ''}
    };

  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses //This comes from the rootReducer key value map
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse : course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch) //wraps all actions in course actions file
  };
} //If you dont provide it will automatically create mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage); //() => results() back to back function calls
