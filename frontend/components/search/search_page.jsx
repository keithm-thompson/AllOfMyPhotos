import React from 'react';
import SearchUserItem from './search_user_item';
import SearchPhotoItem from './search_photo_item';
import { Link, withRouter } from 'react-router';
import classNames from 'classnames';
import UserPhoto from '../user_show/user_photo';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleProfileView = this.handleProfileView.bind(this);
    this.state = {
      search: this.props.route,
      queryString: null
    };
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

  handleProfileView(userId) {
    return () => {
      this.props.router.push(`/users/${userId}`);
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
              handleView={this.handleProfileView(user.id)}
              isFollowing={isFollowing}
              key={idx} />;
    });
    return items;
  }

  handleView(userId,photoId) {
    return (e) => {
      this.props.router.push(`/users/${userId}/photos/${photoId}`);
    };
  }

  photoItems() {
    this.rowsOfTaggedPhotos = [];
    this.rowsOfSimilarPhotos = [];
    let photos = [];
    if (this.props.search.length > 0) {
      for(let i = 0; i < this.props.search[0].length; i++) {
        photos.push(<UserPhoto key={ this.props.search[0][i].id }
          imageUrl={ this.props.search[0][i].image_url }
          style={ { marginRight: '5px' }}
          handleClick={ this.handleView(
                                        this.props.search[0][i].user.id,
                                        this.props.search[0][i].id)}/>
                                      );

        if(i > 0 && i % 4  === 0 || i === this.props.search[0].length-1) {
          this.rowsOfTaggedPhotos.push(
            <ul className="user-photos-container" key={i}>
              { photos }
            </ul>
          );
        photos = [];
        }
      }

      for(let i = 0; i < this.props.search[1].length; i++) {
        photos.push(<UserPhoto key={ this.props.search[1][i].id }
          imageUrl={ this.props.search[1][i].image_url }
          style={ { marginRight: '5px' }}
          handleClick={ this.handleView(
                                        this.props.search[1][i].user.id,
                                        this.props.search[1][i].id)}/>
                                      );

        if(i > 0 && i % 4  === 0 || i === this.props.search[1].length-1) {
          this.rowsOfSimilarPhotos.push(
            <ul className="user-photos-container" key={i}>
              { photos }
            </ul>
          );
        photos = [];
        }
      }
    }
    return <div>
          <h1 className="photo-label"> Photos tagged with { this.state.queryString }:</h1>
          { this.rowsOfTaggedPhotos }
          <h1 className="photo-label"> Photos with a similar tag:</h1>
          { this.rowsOfSimilarPhotos }
          </div>;
  }

  componentWillReceiveProps(nextState) {
    this.setState({
                    search: nextState.route.path,
                    queryString: nextState.location.search.slice(1)
                  });
  }

  render () {
    let searchItems;
    let photosItemClasses;
    let peopleItemClasses;

    if (this.state.search === "search") {
      searchItems = this.userItems();
      peopleItemClasses = classNames({ "search-bar-list-active": true });

    } else {
      searchItems = this.photoItems();
      photosItemClasses = classNames({ "search-bar-list-active": true });
    }

    return (
      <div>
        <header className="search-nav-bar group">
          <ul className="search-bar-list">
            <li className={ photosItemClasses }>
              <Link to={`/search/photos/?${this.state.queryString}`}>Photos</Link>
            </li>
            <li className={ peopleItemClasses }>
              <Link to={`/search/?${this.state.queryString}`}>People</Link>
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
export default withRouter(SearchPage);
