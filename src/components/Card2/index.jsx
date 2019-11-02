import React from 'react';

import './card2.scss';
import pix from '../../images/billgates.jpg';

const Card2 = () => {
  return (
    <div>
      <div className="card2">
        <div className="header">
          <h1>Recent Activities</h1>
        </div>
        <div className="activity">
          <div className="doc-icon">
            <i className="fas fa-check-circle"></i>
            <div className="vr"></div>
          </div>
          <div className="doc-text">
            <h2>Lorem ipsum dolor sit amet</h2>
            <div className="user">
              <div className="user-icon">
                <img src={pix} alt="" />
              </div>
              <div className="user-comment">
                <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span></p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="activity">
          <div className="doc-icon">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <div className="doc-text">
            <h2>Lorem ipsum dolor sit amet</h2>
            <div className="user">
              <div className="user-icon">
                <img src={pix} alt="" />
              </div>
              <div className="user-comment">
                <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
