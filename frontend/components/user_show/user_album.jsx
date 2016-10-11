import React from 'react';

const UserAlbum = ({ title, coverPhotoUrl, numPhotos, handleClick }) => (
  <div className="album-look" style={ { backgroundImage: "url(" + coverPhotoUrl + ")"} }>
    <li className="user-album"
      onClick={handleClick}>
      <div className="user-album-info">
        <h5>{ title }</h5>
        <p>{ numPhotos } Photos</p>
      </div>
    </li>
  </div>
);

export default UserAlbum;
