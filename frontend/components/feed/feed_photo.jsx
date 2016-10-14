import React from 'react';

export default ({ photo, clickPhoto, clickUser }) => (
  <li className="photo-container">
    <img src={ photo.image_url } className="feed-photo" onClick={ clickPhoto }/>
    <div>
      <img src={ photo.user.image_url } className="feed-user-icon" />
      <div className="photo-info" onClick={ clickUser }>
        <h4>{ photo.user.username }</h4>
        <h5 className="uploaded-time" >{ photo.time_since_uploaded } ago</h5>
        <p>{ photo.title }</p>
      </div>
    </div>
  </li>
);
