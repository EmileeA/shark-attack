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
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    this.setState({ livingStudents });
  }

  render() {
    return (
      <div className="App row d-flex justify-content-center">
        <SharkTank students={this.state.livingStudents} />
        <Graveyard />
      </div>
    );
  }
}

export default App;
