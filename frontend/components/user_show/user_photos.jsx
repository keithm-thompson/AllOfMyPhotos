import React from 'react';
import { withRouter } from 'react-router';
import UserPhoto from './user_photo';

export default class UserPhotos extends React.Component {
  handleClick(e) {

  }

  render() {
    
    const userPhotos = this.props.photos.map((photo) => {
      return <UserPhoto key={ photo.id } imageUrl={ photo.image_url } />;
    });

    return (
      <div>
        <ul className="user-photos-container">
          { userPhotos }
        </ul>
      </div>
    );
  }
}
