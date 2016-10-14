import React from 'react';

export default ({image, user, handleClick, isFollowing, handleView }) => {
  let button;
  if (isFollowing) {
    button = <button onClick={handleClick(true)}
       id={user.id}
       className="button signup-style search-follow-button">Unfollow</button>;
  } else {
    button = <button onClick={handleClick(false)}
      id={user.id}
      className="button signup-style search-follow-button">+ Follow</button>;
  }
  return (
    <li className="people-item" >
      <img src={user.image_url} className="user-icon" onClick={ handleView }/>
      <h4 className="search-username" onClick= { handleView }>{ user.username }</h4>
      { button }
    </li>
  );
};
