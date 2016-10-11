import React from 'react';
import { connect } from 'react-redux';
import CreateAlbum from './create_album';
import { createAlbum } from '../../actions/album_actions';

const mapStateToProps = (state) => ({
  photos: state.user.photos
});

const mapDispatchToProps = (dispatch) => ({
  createAlbum: (album) => dispatch(createAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAlbum);
