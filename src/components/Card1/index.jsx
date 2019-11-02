import React from 'react';

import './card.scss';

const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="header">
          <h1>Recent Document</h1>
        </div>
        <div className="document">
          <div className="doc-icon">
            <i class="far fa-file-alt"></i>
          </div>
          <div className="doc-text">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>adipiscing elit</p>
          </div>
        </div>
        <div className="document">
          <div className="doc-icon">
            <i class="far fa-file-alt"></i>
          </div>
          <div className="doc-text">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>adipiscing elit</p>
          </div>
        </div>
        <div className="document">
          <div className="doc-icon">
            <i class="far fa-file-alt"></i>
          </div>
          <div className="doc-text">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>adipiscing elit</p>
          </div>
        </div>
        <div className="document">
          <div className="doc-icon">
            <i class="far fa-file-alt"></i>
          </div>
          <div className="doc-text">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
