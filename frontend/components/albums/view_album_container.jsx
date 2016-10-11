import React from 'react';
import { connect } from 'react-redux';
import ViewAlbum from './view_album';

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
    userProperties: state.user.properties
  };
};


const mapDispatchToProps = (dispatch) => ({
  // soon to be remove photo from album
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewAlbum);
