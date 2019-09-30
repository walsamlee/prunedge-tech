// react
import React from 'react';

// style
import './style.scss';

const Activity = () => {
  return (
    <div className="dashboard">
      <div className="title">
        <h2>Activity</h2>
      </div>
      <div className="activity">
        <div className="activity__recent">
          <p>Recent Activities</p>
        </div>
        <div className="activity__filter">
          <p>Filter</p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
