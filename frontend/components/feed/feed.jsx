import React from 'react';
import FeedPhoto from './feed_photo';
import { withRouter } from 'react-router';

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.handleViewPhoto = this.handleViewPhoto.bind(this);
    this.handleViewProfile = this.handleViewProfile.bind(this);
    this.addFeedPhotos = this.addFeedPhotos.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      feedPhotosComponents: [],
      feedPhotos: [],
      isLoading: false,
      loadedAll: false
    };
  }

  addFeedPhotos(photos) {
    const feedPhotosComponents = photos.map((photo) => {
       return <FeedPhoto
                key={ photo.id }
                photo={ photo }
                clickPhoto={ this.handleViewPhoto(photo.user.id, photo.id) }
                clickUser={ this.handleViewProfile(photo.user.id) }
              />;
          });
    this.setState({
      feedPhotos: photos,
      feedPhotosComponents: this.state.feedPhotosComponents.concat(feedPhotosComponents),
      isLoading: false
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.feedPhotos.length === 0 ||
      nextProps.feedPhotos[nextProps.feedPhotos.length - 1].id !== this.state.feedPhotos[this.state.feedPhotos.length - 1].id) {
      this.addFeedPhotos(nextProps.feedPhotos);
    }
  }

  componentDidMount() {
    this.props.fetchInitialFeed();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      if (!(this.state.loadedAll || this.state.isLoading)) {
        this.setState({
          isLoading: true
        })
        this.props.fetchNextPhotos(this.state.feedPhotosComponents.length, 6);
      }
    }
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
    if(this.state.feedPhotos.length > 0) {
      return (
        <ul className="feed-container">
          { this.state.feedPhotosComponents }
        </ul>
      );
    } else {
      return <p className="empty-feed">Welcome to AllOfMyPhotos! Seems like your feed is empty. Please search for some users to follow.</p>;
    }
  }
}
export default withRouter(Feed);
