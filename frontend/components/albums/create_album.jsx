import React from 'react';
import { withRouter } from 'react-router';
import UserPhoto from '../user_show/user_photo';
import merge from 'lodash/merge';

class CreateAlbum extends React.Component {
  constructor(props){
    super(props);
    this.state= ({
      title: "",
      description: "",
      selectedPhotos: {}
    });

    this.handleInput =  this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      duppedState = merge({}, this.state.selectedPhotos);
      if (this.state.selectedPhotos.photoId){
        delete duppedState.photoId;
      } else {
        duppedState.photoId = true;
      }
      this.setState({ selectedPhotos: duppedState });
    };
  }

  handleSubmit(){

  }

  render() {
    let rowsOfPhotos = [];
    let photos = [];

    if(this.props.photos){
      for(let i = 0; i < this.props.photos.length; i++) {
        photos.push(<UserPhoto key={ this.props.photos[i].id }
          imageUrl={ this.props.photos[i].image_url }
          handleClick={ this.handleClick(this.props.photos[i].id)}/>);

        if(i > 0 && i % 4  === 0 || i === this.props.photos.length-1) {
          rowsOfPhotos.push(
            <ul className="user-photos-container" key={i}>
              { photos }
            </ul>
          );
        photos = [];
        }
      }
    }

    return(
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter Title"
            value={ this.state.title }
            onChange={ this.handleInput("title") }></input>
          <textarea
            placeholder="Enter Description (optional)"
            value={ this.state.description }
            onChange={ this.handleInput("description") }></textarea>
          <button onClick={this.handleSubmit}>Submit</button>
          { rowsOfPhotos }
        </form>
      </div>
    );
  }
}

export default withRouter(CreateAlbum);
