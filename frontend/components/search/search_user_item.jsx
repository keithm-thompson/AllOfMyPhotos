import React from 'react';

export default ({image, user, handleClick, isFollowing }) => {
  let button;
  if (isFollowing) {
    button = <button onClick={handleClick(true)}
       id={user.id}
       className="button signup-style search-follow-button">Unfollow</button>
  } else {
    button = <button onClick={handleClick(false)}
      id={user.id}
      className="button signup-style search-follow-button">+ Follow</button>
  }
  return (
    <li className="people-item" >
      <img src={user.image_url} className="user-icon"/>
      <h4 className="search-username">{ user.username }</h4>
      { button }
    </li>
  );
};
