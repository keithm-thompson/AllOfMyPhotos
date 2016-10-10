import React from 'react';
import { withRouter } from 'react-router';
import UserPhoto from './user_photo';

export default class UserPhotos extends React.Component {
  handleClick(e) {

  }

  render() {
    let rowsOfPhotos = [];
    let photos = [];
    for(let i = 0; i < this.props.photos.length; i++) {
      photos.push(<UserPhoto key={ this.props.photos[i].id } imageUrl={ this.props.photos[i].image_url } />);

      if(i > 0 && i % 4  === 0 || i === this.props.photos.length-1) {
        rowsOfPhotos.push(
          <ul className="user-photos-container" key={i}>
            { photos }
          </ul>
        );
      photos = [];
    }
  }
    return (
      <div className="user-show-content">
        { rowsOfPhotos }
      </div>
    );
  }
}
