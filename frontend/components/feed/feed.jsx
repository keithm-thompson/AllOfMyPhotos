import React from 'react';
import FeedPhoto from './feed_photo';

export default class Feed extends React.Component {

  componentDidMount() {
    this.props.fetchFullFeed();
  }

  render() {
      const feedPhotos = this.props.feedPhotos.map((photo) => {
        if (photo.user) {
         return <FeedPhoto key={photo.id} photo={photo} />;
         }
      });


    return (
      <ul className="feed-container">
        { feedPhotos }
      </ul>
    );
  }
}
