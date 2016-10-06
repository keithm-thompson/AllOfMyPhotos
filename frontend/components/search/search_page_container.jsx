import React from 'react';
import { connect } from 'react-redux';
import {
  createFollowRelationship,
  deleteFollowRelationship
 } from '../../actions/following_actions';
import SearchPage from './search_page';

const mapStateToProps = (state) => ({
  search: state.search,
  following: state.following
});

const mapDispatchToProps = (dispatch) => ({
  createFollowRelationship: (userId) => dispatch(createFollowRelationship(userId)),
  deleteFollowRelationship: (userId) => dispatch(deleteFollowRelationship(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
