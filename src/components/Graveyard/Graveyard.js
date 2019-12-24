// the burial ground for students who have not made it...
import './Graveyard.scss';
import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from '../GraveStone/GraveStone';
import studentShape from '../../helpers/propz/studentShape';

class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const graveCards = students.map((student) => <GraveStone key={student.id} student={student} />);
    return (
      <div className="graveyard row col-5">
        <div className="row d-flex justifyy-content-center graveContainer">
          {graveCards}
        </div>
        <h3 id="graveId">Graveyard</h3>
      </div>
    );
  }
}

export default Graveyard;
