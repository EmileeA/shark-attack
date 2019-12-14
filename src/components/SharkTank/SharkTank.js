// the pool that all living students are swimming in
import React from 'react';
import './SharkTank.scss';

class SharkTank extends React.Component {
  render() {
    return (
      <div className="sharkTank row col-3">
        <h3 id="tankId">Shark Tank</h3>
      </div>
    );
  }
}

export default SharkTank;
