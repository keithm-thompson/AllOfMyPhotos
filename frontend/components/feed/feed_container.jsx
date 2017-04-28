import { connect } from 'react-redux';
import React from 'react';
import Feed from './feed';
import {
  fetchFullFeed,
  fetchInitialFeed,
  fetchNextPhotos
} from '../../actions/photo_actions';

const mapStateToProps = (state) => ({
  feedPhotos: state.feedPhotos
});

const mapDispatchToProps = (dispatch) => ({
  fetchFullFeed: () => dispatch(fetchFullFeed()),
  fetchInitialFeed: () => dispatch(fetchInitialFeed()),
  fetchNextPhotos: (startIdx, numPhotos) => dispatch(fetchNextPhotos(startIdx, numPhotos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
