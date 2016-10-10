import React from 'react';
import { connect } from 'react-redux';
import UploadPhoto from './upload_photo';
import { uploadPhoto } from '../../actions/photo_actions';

const mapDispatchToProps = (dispatch) => ({
  uploadPhoto: (photo) => dispatch(uploadPhoto(photo))
});

export default connect(
  null,
  mapDispatchToProps
)(UploadPhoto);
