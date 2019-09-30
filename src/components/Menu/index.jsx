// react
import React from 'react';

// style
import './style.scss';

const Menu = () => (
  <div className="menu">
    <div className="item">
      <a className="active" href="/">
        <i className="fas fa-home"></i> Dashboard
      </a>
    </div>
    <div className="item">
      <a href="/">
        <i className="fas fa-bookmark"></i> My Document
      </a>
    </div>
    <div className="item">
      <a href="/">
        <i className="fas fa-bell"></i> Activity
      </a> 
      <div className="badge">
        <p>12</p>
      </div>
    </div>
    <div className="item">
      <a href="/">
        <i className="fas fa-user"></i> Account
      </a>
    </div>
    <div className="filler"></div>
    <div className="item">
      <a className="logout" href="/">
        <i class="fas fa-arrow-circle-left"></i> Log Out
      </a>
    </div>
  </div>
);

export default Menu;
