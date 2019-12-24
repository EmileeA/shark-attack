// a card of your choosing that gets called from the Graveyard component inside a map.
import React from 'react';
import './GraveStone.scss';
import studentShape from '../../helpers/propz/studentShape';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
     <div className="graveCard">
     <div class="studentName">
       <h3>Dearly Beloved</h3>
       <h4>{student.firstName}</h4>
       <h4>{student.lastName}</h4>
       </div>
     </div>
    );
  }
}

export default GraveStone;
