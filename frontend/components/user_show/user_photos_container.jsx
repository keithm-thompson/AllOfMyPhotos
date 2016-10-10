import React from 'react';
import { connect } from 'react-redux';
import UserPhotos from './user_photos';

const mapStateToProps = (state) => ({
  photos: state.user.photos,
  userId: state.user.properties.id
});

export default connect(
  mapStateToProps,
  null
)(UserPhotos);
