import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';
// import LiveStudent from '../components/LiveStudent/LiveStudent';
// import GraveStone from '../components/GraveStone/GraveStone';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SharkTank />
        <Graveyard />
      </div>
    );
  }
}

export default App;
