// redux
import { combineReducers } from 'redux';

// reducers
import users from './userReducer';

const allReducers = combineReducers({
  users,
});

export default allReducers;
