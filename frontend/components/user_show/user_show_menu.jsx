import React from 'react';
import { Link } from 'react-router';

export default class UserShowMenu extends React.Component {

  render() {

    return (
      <header className="user-show-nav-bar">
        <ul className="search-bar-list">
          <li>
            <Link to={`/users/${this.props.userProperties.id}/upload`} className="user-show-link">Upload Photo</Link>
          </li>
          <li>
            <Link to={`/users/${this.props.userProperties.id}`} className="user-show-link">Photos</Link>
          </li>
          <li>
            <Link to={`/users/${this.props.userProperties.id}/albums`} className="user-show-link">Albums</Link>
          </li>
        </ul>
      </header>
    );
  }
}
