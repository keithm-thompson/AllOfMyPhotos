import { connect } from 'react-redux';
import React from 'react';
import Feed from './feed';

import {
  fetchFullFeed
} from '../../actions/photo_actions';

const mapStateToProps = (state) => ({
  feedPhotos: state.feedPhotos
});

const mapDispatchToProps = (dispatch) => ({
  fetchFullFeed: () => dispatch(fetchFullFeed())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
