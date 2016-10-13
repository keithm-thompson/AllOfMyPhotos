import React from 'react';
import SearchUserItem from './search_user_item';
import SearchPhotoItem from './search_photo_item';

export default class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {search: "people"};
  }

  handleClick(isFollowing) {
    return (e) =>{
      e.preventDefault();
      if(isFollowing){
        this.props.deleteFollowRelationship(parseInt(e.currentTarget.id));
      } else {
        this.props.createFollowRelationship(parseInt(e.currentTarget.id));
      }
    };
  }

  userItems() {
    let items =  this.props.search.map((user, idx)=>{
      let isFollowing;
      if (this.props.following[user.id]){
        isFollowing = true;
      } else {
        isFollowing = false;
      }
      return <SearchUserItem user={user}
              handleClick={this.handleClick}
              isFollowing={isFollowing}
              key={idx} />;
    });
    return items;
  }

  photoItems() {
    return this.props.search.map((photo, idx)=>{
      return <SearchPhotoItem photo={photo} key={idx} />;
    });
  }

  componentWillReceiveProps(nextState) {
    this.setState({ search: nextState.route.path });
  }

  render () {
    let searchItems;
    if (this.state.search === "people") {
      searchItems = this.userItems();
    } else {
      searchItems = this.photoItems();
    }


    return (
      <div>
        <header className="search-nav-bar group">
          <ul className="search-bar-list">
            <li>
              <a href="#">Photos</a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
          </ul>
        </header>
        <ul className="search-items-container">
          { searchItems }
        </ul>
      </div>
    );
  }
}
