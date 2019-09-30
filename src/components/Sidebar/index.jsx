// react
import React from 'react';

// style
import './style.scss';

const Sidebar = () => (
  <div className="sidebar">
    <div className="user">
      <div className="user__image"></div>
      <div className="user__fullname">
        <p>Full Name</p>
      </div>
      <div className="user__designation">
        <p>Designation</p>
      </div>
      <div className="user__department">
        <p>Department</p>
      </div>
    </div>

  </div>
);

export default Sidebar;
