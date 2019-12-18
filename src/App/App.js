import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';
import studentData from '../helpers/data/studentData';

// import LiveStudent from '../components/LiveStudent/LiveStudent';
// import GraveStone from '../components/GraveStone/GraveStone';

class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ livingStudents });
    this.setState({ deadStudents });
  }
}

  // As a user, when I click on the SHARK ATTACK button, the app should pick a random live student and change their isDead key to true.
  attackAStudent = () => {
    if (this.state.livingStudents.length > 0) {
    const randomizer = (Math.floor(Math.random() * this.state.livingStudents.length));
    const studentToAttack = this.state.livingStudents[randomizer].id;
    studentData.followTheLight(studentToAttack);
    const livingStudents = studentData.livingStudents();
    this.setState({ livingStudents });
    this.setState({})
  }
}

  // As a user, when the page loads, I should see a button in the shark tank that says SHARK ATTACK.
  render() {
    return (
      <div className="App">
      <div className="App row d-flex justify-content-center"><div onClick={this.attackAStudent} className="btn btn-danger">Shark Attack!</div></div>
        <div className="row">
        <SharkTank students={this.state.livingStudents} />
        <Graveyard students={this.state.deadStudents} />
      </div>
    </div>
    );
  }
}

export default App;
