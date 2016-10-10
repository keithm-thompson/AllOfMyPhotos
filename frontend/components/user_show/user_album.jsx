import React from 'react';

const UserAlbum = ({ title, coverPhotoUrl, numPhotos, albumView }) => (
  <div className="album-look">
    <li className="user-album"
      onClick={albumView}
      style={ { backgroundImage: "url(" + coverPhotoUrl + ")"} }>
      <div>
        <h5>{ title }</h5>
        <p>{ numPhotos } Photos</p>
      </div>
    </li>
  </div>
);

export default UserAlbum;
