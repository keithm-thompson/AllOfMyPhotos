import React from 'react';
import { connect } from 'react-redux';
import CreateAlbum from './create_album';
import {
  createAlbum,
  createAlbumPhotoRelationship
} from '../../actions/album_actions';

const mapStateToProps = (state) => ({
  photos: state.user.photos,
  userId: state.user.properties.id
});

const mapDispatchToProps = (dispatch) => ({
  createAlbum: (album) => dispatch(createAlbum(album)),
  createAlbumPhotoRelationship: (albumId, photoId) => dispatch(createAlbumPhotoRelationship(albumId, photoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAlbum);
