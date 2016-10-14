import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class UserShowMenu extends React.Component {

  render() {
    let uploadClassnames;
    let photoClassnames;
    let albumClassnames;
    let uploadPhotoLink;

    if(this.props.route.path === "albums") {
      albumClassnames = classNames({
        "selected-menu-link": true
      });
    } else if (this.props.route.path === "upload") {
      uploadClassnames = classNames({
        "selected-menu-link": true
      });
    } else {
      photoClassnames = classNames({
        "selected-menu-link": true
      });
    }
    if( this.props.userProperties.id === this.props.currentUser.id ) {
      uploadPhotoLink = <Link to={`/users/${this.props.userProperties.id}/upload`} className="user-show-link">Upload Photo</Link> ;
    }
    return (
      <header className="user-show-nav-bar">
        <ul className="search-bar-list">
          <li className={uploadClassnames}>
            { uploadPhotoLink }
          </li>
          <li className={photoClassnames}>
            <Link to={`/users/${this.props.userProperties.id}`} className="user-show-link">Photos</Link>
          </li>
          <li className={albumClassnames}>
            <Link to={`/users/${this.props.userProperties.id}/albums`} className="user-show-link">Albums</Link>
          </li>
        </ul>
      </header>
    );
  }
}
