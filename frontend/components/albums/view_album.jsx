import React from 'react';
import { Link, withRouter } from 'react-router';
import UserPhoto from '../user_show/user_photo';

class ViewAlbum extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(photoId) {
    return (e) => {
      this.props.router.push(`/users/${this.props.userProperties.id}/photos/${photoId}`);
    };
  }

  render(){
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
