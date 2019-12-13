// the pool that all living students are swimming in
import React from 'react';
import './SharkTank.scss';

class SharkTank extends React.Component {
  render() {
    return (
      <div className="sharkTank row d-flex justify-content-center">
        <h4 id="tankLabel">Shark Tank</h4>
      </div>
    );
  }
}

export default SharkTank;
