import React from 'react';
import { Link, withRouter } from 'react-router';
import UserPhoto from '../user_show/user_photo';

class ViewAlbum extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.deleteAlbum = this.deleteAlbum.bind(this);
  }

  handleClick(photoId) {
    return (e) => {
      this.props.router.push(`/users/${this.props.userProperties.id}/photos/${photoId}`);
    };
  }

  deleteAlbum(e) {
    this.props.deleteAlbum(this.props.album.id);
    this.props.router.push(`/users/${this.props.userProperties.id}/albums`);
  }

  render(){
    let editAlbumLink = null, deleteButton = null;

    if(this.props.album){
      let rowsOfPhotos = [];
      let photos = [];
      for(let i = 0; i < this.props.album.photos.length; i++) {
        photos.push(<UserPhoto key={ this.props.album.photos[i].id }
          imageUrl={ this.props.album.photos[i].image_url }
          handleClick={ this.handleClick(this.props.album.photos[i].id)}/>);

        if(i > 0 && i % 4  === 0 || i === this.props.album.photos.length-1) {
          rowsOfPhotos.push(
            <ul className="user-photos-container" key={i}>
              { photos }
            </ul>
          );
        photos = [];
        }
      }
      if(this.props.userProperties.id === this.props.currentUser.id) {
        editAlbumLink = <div className="edit-album">
          <i className="material-icons">mode_edit</i>
          <Link to={`/users/${this.props.userProperties.id}/albums/${this.props.album.id}/edit_album`}>Edit Album</Link>
        </div>;

        deleteButton = <div className="delete-album">
                          <i className="material-icons" onClick={this.deleteAlbum}>delete_forever</i>
                       </div> ;
      }

      let description = "No description given";

      if (this.props.album.description) {
        description = this.props.album.description;
      }
      return(
        <div className="album-view-container">
          <div className="back-to-album">
            <i className="material-icons"> keyboard_arrow_left</i>
            <Link to={`/users/${this.props.userProperties.id}/albums`}>Back to albums list</Link>
          </div>

        { editAlbumLink }
        { deleteButton }

          <div className="album-cover-image-container" style={ {backgroundImage: "url(" + this.props.album.photos[0].image_url + ")" } }>
            <div className="background-dim"></div>
            <h1>{ this.props.album.title }</h1>
            <p>{ description }</p>
            <h6>By: { this.props.userProperties.username } </h6>
            <h6>{ this.props.album.photos.length } photos </h6>

          </div>
          { rowsOfPhotos }
        </div>
      );
    } else {
      return null;
    }
  }
}
export default withRouter(ViewAlbum);

// <i className="material-icons">add</i>
