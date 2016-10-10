import React from 'react';
import UserAlbum from './user_album';

export default class UserAlbums extends React.Component {

  constructor(props) {
    super(props);
    this.albumView = this.albumView.bind(this);
  }

  albumView(idx) {
    return (e) => {

    };
  }

  render() {
    const userAlbums = this.props.albums.map((album, idx) => {
      return <UserAlbum key={ album.id }
                        title={ album.title }
                        albumView={ this.albumView(idx) }
                        coverPhotoUrl={ album.photos[0].image_url }
                        numPhotos={ album.photos.length } />;
    });

    return (
      <ul className="user-show-content user-album-container">
        { userAlbums }
      </ul>
    );
  }
}
