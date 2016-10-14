import React from 'react';
import FeedPhoto from './feed_photo';
import { withRouter } from 'react-router';

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.handleViewPhoto = this.handleViewPhoto.bind(this);
    this.handleViewProfile = this.handleViewProfile.bind(this);
  }

  componentDidMount() {
    this.props.fetchFullFeed();
  }

  handleViewPhoto(userId, photoId) {
    return () => {
      this.props.router.push(`/users/${userId}/photos/${photoId}`);
    };
  }

  handleViewProfile(userId) {
    return () => {
      this.props.router.push(`/users/${userId}`);
    };
  }

  render() {
    const feedPhotos = this.props.feedPhotos.map((photo) => {
       return <FeedPhoto
                key={photo.id}
                photo={photo}
                clickPhoto={ this.handleViewPhoto(photo.user.id, photo.id) }
                clickUser={ this.handleViewProfile(photo.user.id) }
              />;
    });

    return (
      <ul className="feed-container">
        { feedPhotos }
      </ul>
    );
  }
}
export default withRouter(Feed);
