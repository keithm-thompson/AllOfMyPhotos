import React from 'react';
import { connect } from 'react-redux';
import UserAlbums from './user_albums';
import { createAlbum } from '../../actions/album_actions';

const mapStateToProps = (state) => ({
  albums: state.user.albums,
  userId: state.user.properties.id
});

const mapDispatchToProps = (dispatch) => ({
  createAlbum: (album) => dispatch(createAlbum)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAlbums);
