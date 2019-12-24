// a card of your choosing that gets called from the SharkTank component inside a map.
import React from 'react';

import './LiveStudent.scss';
import studentShape from '../../helpers/propz/studentShape';

class Student extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      // i want the student name to print
      // className and alt are attributes that are on the HTML element
      // jsx is reacts markup language which is javascript extensible markup language
      // class is a reserved word in react so we have to user className. class means something in react.
      // classes are kind of like containers for information behavior. Our react class gives us all this cool syntax.
      // proptypes is an object
      // class (insertComponentname) extends the entire React.Component. Because react.component knows what to do with react functions.3`
      <div className="studentCard">
      <p className="card-top" alt={student.name}></p>
        <p>{student.firstName}</p>
        </div>
    );
  }
}

export default Student;
