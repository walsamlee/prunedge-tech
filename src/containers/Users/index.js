import { connect } from 'react-redux';
import Users from '../../components/User';
import getUsers from '../../actions/getUsersAction';

const mapStateToProps = state =>({
  data: state.users,
});

const mapDispatchToProps = {
  getUsers: getUsers,
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;