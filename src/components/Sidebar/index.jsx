// react
import React from 'react';

// components
import Menu from '../Menu';
import User from '../../containers/Users';

// style
import './style.scss';

const Sidebar = () => (
  <div className="sidebar">
    <User />
    <Menu />
  </div>
);

export default Sidebar;
