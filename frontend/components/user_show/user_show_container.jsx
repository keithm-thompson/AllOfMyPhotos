import React from 'react';
import { connect } from 'react-redux';
import UserShow from './user_show';


const mapStateToProps = (state) => ({
  user: state.user,
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(UserShow);
