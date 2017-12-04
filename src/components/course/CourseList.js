import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  console.log('HERE ARE THE COURSES' + courses);
  return(
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {
          courses.map(course =>
            <CourseListRow key={course.id} course={course}/>
        )}
      </tbody>
    </table>
  );
};

export default CourseList;