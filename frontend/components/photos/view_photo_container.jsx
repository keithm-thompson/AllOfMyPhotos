import React from 'react';
import { connect } from 'react-redux';
import ViewPhoto from './view_photo';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state) => ({
  photos: state.user.photos,
  userProperties: state.user.properties
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPhoto);
