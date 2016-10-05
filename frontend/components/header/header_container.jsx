import { connect } from 'react-redux';
import { signin, signup, signout } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signin: (user, callback) => dispatch(signin(user, callback)),
  signup: (user, callback) => dispatch(signup(user, callback)),
  signout: (callback) => dispatch(signout(callback)),
  clearErrors: () => dispatch({type: "CLEAR_ERRORS"})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
