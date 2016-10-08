import React from 'react';

export default class UserShowMenu extends React.Component {

  render() {

    return (
      <header className="user-show-nav-bar">
        <ul className="search-bar-list">
          <li>
            <a href="#">Add photo</a>
          </li>
          <li>
            <a href="#">Photos</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
        </ul>
      </header>
    );
  }
}
