import React, { Component } from 'react';

import './style.scss';

class User extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }
  
  render() {
    const { data: { users } } = this.props;
    console.log('Data: ', users);

    return(
      <div className="user">
        <div className="user__image">
          <img src={users.picture} alt="profile"/>
        </div>
        <div className="user__fullname">
          <p>{users.name}</p>
        </div>
        <div className="user__designation">
          <p>{users.designation}</p>
        </div>
        <div className="user__department">
          <p>{users.department}</p>
        </div>
      </div>
    )
  }
}

export default User;