import React from 'react';
import { Link, withRouter } from 'react-router';
import UserPhoto from '../user_show/user_photo';
import merge from 'lodash/merge';
import { Notification } from 'react-notification';

class CreateAlbum extends React.Component {
  constructor(props){
    let selectedPhotos = {};
    props.album.photos.forEach((photo) => {
      selectedPhotos[photo.id] = true;
    });

    super(props);
    this.state= ({
      title: props.album.title,
      description: props.album.description,
      selectedPhotos: selectedPhotos,
      photosToAdd: {},
      photosToRemove: {},
      errors: []
    });

    this.handleInput =  this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrorsInState = this.clearErrorsInState.bind(this);
  }

  handleInput(type){
    return (e) => {
      if(type === "title") {
        this.setState({ title: e.currentTarget.value });
      } else if (type === "description") {
        this.setState({ description: e.currentTarget.value });
      }
    };
  }

  handleClick(photoId){
    return () => {
      let photosToAdd = merge({}, this.state.photosToAdd);
      let photosToRemove = merge({}, this.state.photosToRemove);

      if (this.state.selectedPhotos[photoId]){
        delete photosToAdd[photoId];
        if (photosToRemove[photoId]) {
         delete photosToRemove[photoId];
       } else {
         photosToRemove[photoId] = true;
       }
      } else {
        delete photosToRemove[photoId];
        if (photosToAdd[photoId]) {
          delete photosToAdd[photoId];
        } else {
          photosToAdd[photoId] = true;
        }
      }
      this.setState({
                      photosToAdd,
                      photosToRemove
                    });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.title.length === 0) {
      this.setState({ errors: ["Albums must have titles."] });
    } else if (Object.keys(this.state.selectedPhotos).length - Object.keys(this.state.photosToRemove).length + Object.keys(this.state.photosToAdd).length ===  0) {
      this.setState({ errors: ["You must select at least one photo to add to the album."] });
    } else {
      this.props.updateAlbum(
        this.props.album.id,
        {
          title: this.state.title,
          description: this.state.description
        },
       Object.keys(this.state.photosToAdd),
       Object.keys(this.state.photosToRemove));
      this.props.router.push(`/users/${this.props.userId}/albums`);
    }
  }

    clearErrorsInState() {
      this.setState({ errors: [] });
    }

  render() {
    let rowsOfPhotos = [];
    let photos = [];

    if(this.props.photos){
      for(let i = 0; i < this.props.photos.length; i++) {
        if( (this.state.selectedPhotos[this.props.photos[i].id] ||
          this.state.photosToAdd[this.props.photos[i].id]) &&
          !this.state.photosToRemove[this.props.photos[i].id]) {
          photos.push(
            <UserPhoto key={ this.props.photos[i].id }
              imageUrl={ this.props.photos[i].image_url }
              handleClick={ this.handleClick(this.props.photos[i].id)}
              selected={ true }/>
          );
        } else {
          photos.push(
            <UserPhoto key={ this.props.photos[i].id }
              imageUrl={ this.props.photos[i].image_url }
              handleClick={ this.handleClick(this.props.photos[i].id)}/>
          );
        }
        if(i > 0 && i % 4  === 0 || i === this.props.photos.length-1) {
          rowsOfPhotos.push(
            <ul key={i}>
              { photos }
            </ul>
          );
        photos = [];
        }
      }
    }

    return(
      <div className="create-album-page">
        <div className="create-album-container">
          <form className="create-album-info">
            <Notification
              isActive={this.state.errors.length > 0}
              message={this.state.errors[0] || ""}
              onDismiss={this.clearErrorsInState}
              dismissAfter={3000}
              activeClassName='notification'
            />
            <div className="create-album-input">
              <input
                type="text"
                placeholder="Enter Title"
                value={this.state.title}
                onChange={ this.handleInput("title") }
                className="create-album-title"></input>
              <textarea
                placeholder="Enter Description (optional)"
                value={ this.state.description || "" }
                onChange={ this.handleInput("description") }
                className="create-album-desc"></textarea>
            </div>
            <button onClick={this.handleSubmit}
              className="button signup-style">Update Album</button>
          </form>
          <div className="back-to-album create-album-link-back">
            <i className="material-icons"> keyboard_arrow_left</i>
            <Link to={`/users/${this.props.userId}/albums`}>Back to albums list</Link>
          </div>
          <header className="create-album-content-split">Select Photos To Add To This Album!</header>
          <div className="photos-to-choose-from-container">
            <div className="photos-to-choose-from">
              { rowsOfPhotos }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateAlbum);
