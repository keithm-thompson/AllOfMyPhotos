import React from 'react';
import UserAlbum from './user_album';
import { withRouter } from 'react-router';

class UserAlbums extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(albumId) {
    return (e) => {
      this.props.router.push(`/users/${this.props.userId}/albums/${albumId}`);
    };
  }

  render() {
    const userAlbums = this.props.albums.map((album, idx) => {
      return <UserAlbum key={ album.id }
                        title={ album.title }
                        coverPhotoUrl={ album.photos[0].image_url }
                        numPhotos={ album.photos.length }
                        handleClick={ this.handleClick(album.id)} />;
    });

    return (
      <ul className="user-show-content user-album-container">
        { userAlbums }
      </ul>
    );
  }
}

export default withRouter(UserAlbums);
