import React from 'react';
import UserShowMenu from './user_show_menu';

export default class UserShow extends React.Component {

  render() {
    const userProperties = this.props.user.properties;
    const following  = this.props.user.following;
    const followers = this.props.user.followers;

    return(
      <div>
        <div className="user-show-container">
          <div className="user-show" style={ {backgroundImage: "url(" + window.inspireMe.userShowOne + ")"}}>
            <img src={ userProperties.image_url } className="user-icon"></img>
            <div className="user-show-info">
              <h2>{ userProperties.username} </h2>
              <h5>{ Object.keys(followers).length } Followers</h5>
              <h5>{ Object.keys(following).length } Following</h5>
            </div>
          </div>
        </div>
        <UserShowMenu route={this.props.routes[2]} userProperties={this.props.user.properties} currentUser={ this.props.currentUser } />
        { this.props.children }
      </div>
    );
  }
}
