import React from 'react';
import { connect } from 'react-redux';
import UploadPhoto from './upload_photo';
import { uploadPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  uploadPhoto: (photo) => dispatch(uploadPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPhoto);
