import React from 'react';
import { connect } from 'react-redux';
import EditAlbum from './edit_album';
import {
  updateAlbum
} from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  let albumId = parseInt(ownProps.params.id);
  let index = -1;
  for (let i = 0; i < state.user.albums.length; i++) {
    if (albumId === state.user.albums[i].id){
      index = i;
      break;
    }
  }
  return {
    album: state.user.albums[index],
    photos: state.user.photos,
    userId: state.user.properties.id
  };
};


const mapDispatchToProps = (dispatch) => ({
  updateAlbum: (albumId, album, photosToAdd, photosToRemove) => dispatch(updateAlbum(albumId, album, photosToAdd, photosToRemove))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAlbum);
