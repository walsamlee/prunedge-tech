// react
import React from 'react';

// images
import userImg from '../../images/my-passport.jpeg';

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
          <div className="activity__recent--title">
            <p>Recent Activities</p>
          </div>
          <div className="activity__recent--date">
            <p>Today</p>
          </div>
          <div>
            <div className="activity__recent--header">
              <div className="activity__recent--header__icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="top-sect">
                <p className="activity__recent--header__action">Document Approval</p>
                <p className="activity__recent--header__time">4 Mins ago</p>
              </div>
            </div>          
            <div className="activity__recent--user">
              <div className="top-sect">
                <div className="activity__recent--user__img">
                  <img src={userImg} alt=""/>
                </div>
                <p className="activity__recent--user__body">Sequn Oni has approved</p>
                <p className="activity__recent--user__doc">Business proposal document.docx</p>
              </div>
            </div>
          </div>
          <div>
            <div className="activity__recent--header">
              <div className="activity__recent--header__icon-2">
                <i className="fas fa-exclamation-circle"></i>
              </div>
              <div className="top-sect">
                <p className="activity__recent--header__action">Invitation Accepted</p>
                <p className="activity__recent--header__time">5 Mins ago</p>
              </div>
            </div>          
            <div className="activity__recent--user">
              <div className="top-sect">
                <div className="activity__recent--user__img">
                  <img src={userImg} alt=""/>
                </div>
                <p className="activity__recent--user__body">Sequn Oni has rejected</p>
                <p className="activity__recent--user__doc">Campaign Proposal Slide.ppt</p>
                <p className="activity__recent--user__body">with a comment</p>
              </div>
            </div>
          </div>
          <hr/>
          <div>
            <div className="activity__recent--header">
              <div className="activity__recent--header__icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="top-sect">
                <p className="activity__recent--header__action">Document Approval</p>
                <p className="activity__recent--header__time">4 Mins ago</p>
              </div>
            </div>          
            <div className="activity__recent--user">
              <div className="top-sect">
                <div className="activity__recent--user__img">
                  <img src={userImg} alt=""/>
                </div>
                <p className="activity__recent--user__body">Sequn Oni has approved</p>
                <p className="activity__recent--user__doc">Business proposal document.docx</p>
              </div>
              <div className="activity__recent--user__comment">
                <p>Nice Slide Alex, But please add the chart representing the average sales forthe month of September</p>
              </div>
            </div>
            <div className="activity__recent--date">
              <p>Yesterday</p>
            </div>
            <div>
              <div className="activity__recent--header">
                <div className="activity__recent--header__icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="top-sect">
                  <p className="activity__recent--header__action">Document Approval</p>
                  <p className="activity__recent--header__time">4 Mins ago</p>
                </div>
              </div>          
              <div className="activity__recent--user">
                <div className="top-sect">
                  <div className="activity__recent--user__img">
                    <img src={userImg} alt=""/>
                  </div>
                  <p className="activity__recent--user__body">Sequn Oni has approved</p>
                  <p className="activity__recent--user__doc">Business proposal document.docx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="activity__filter">
          <div className="activity__filter--title">
            <p>Filter</p>
          </div>
          <div className="activity__filter--form">
            <form action="">
              <div className="row">
                <div className="label">
                  <p>Department </p>
                </div>
                <label className="select-label" htmlFor="department">
                  <select name="department" id="department">
                    <option value="accounting">Accounting</option>
                    <option value="products">Products</option>
                  </select>
                </label>
              </div>
              <div className="row">
                <div className="label">
                  <p>User </p>
                </div>
                <label className="select-label" htmlFor="user">
                  <select name="user" id="user">
                    <option value="tiwa">Tiwa Pumping</option>
                    <option value="olamide">Olamide Bado</option>
                  </select>
                </label>
              </div>
              <div className="row">
                <div className="label">
                  <p>Status </p>
                </div>
                <label className="select-label" htmlFor="status">
                  <select name="status" id="status">
                    <option value="success">Success</option>
                    <option value="failure">Failure</option>
                  </select>
                </label>
              </div>
              <div className="row">
                <div className="label">
                  <p>Date </p>
                </div>
                <div className="date">
                  <label className="date-label" htmlFor="">
                    <input type="text"/>
                  </label>
                  <div className="label">
                    <p>to </p>
                  </div>
                  <label className="date-label" htmlFor="">
                    <input type="text"/>
                  </label>
                </div>
              </div>
              <label className="filter-button" htmlFor="">
                <button className="clear">Clear Filter</button>
                <button className="filter">Filter</button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
