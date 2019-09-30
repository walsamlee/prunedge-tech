// react
import React from 'react';

// components
import Menu from '../Menu';

// images
import picture from '../../images/my-passport.jpeg';

// style
import './style.scss';

const Sidebar = () => (
  <div className="sidebar">
    <div className="user">
      <div className="user__image">
        <img src={picture} alt="profile"/>
      </div>
      <div className="user__fullname">
        <p>Akinwale Samuel</p>
      </div>
      <div className="user__designation">
        <p>Software Engineer</p>
      </div>
      <div className="user__department">
        <p>Products</p>
      </div>
    </div>
    <Menu />
  </div>
);

export default Sidebar;
