import React from 'react';
import { connect } from 'react-redux';
import ViewPhoto from './view_photo';
import { fetchUser } from '../../actions/user_actions';
import {
        deletePhoto,
        addTagToPhoto,
        removeTagFromPhoto
      } from '../../actions/photo_actions';



const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    photos: state.user.photos,
    userProperties: state.user.properties
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
  addTagToPhoto: (photoId, tagName) => dispatch(addTagToPhoto(photoId, tagName)),
  removeTagFromPhoto: (photoId, tagId) => dispatch(removeTagFromPhoto(photoId, tagId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPhoto);
