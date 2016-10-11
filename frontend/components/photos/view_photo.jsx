import React from 'react';
import { Link, withRouter } from 'react-router';

class ViewPhoto extends React.Component {

  constructor(props){
    super(props);

    this.state = { idx: -1 };
    this.handleNav = this.handleNav.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  handleNav(num) {
    return (e) => {
      let currentIdx = this.state.idx;
      this.setState({ idx: currentIdx += num });
    };
  }

  deletePhoto() {
    this.props.deletePhoto(this.props.photos[this.state.idx].id);
    // add promise
    let index = this.state.idx;
    
    if (index > 0) {
      this.setState({ idx: --index});
    } else if (index < this.props.photos.length) {
      this.setState({ idx: ++index});
    } else {
      this.props.router.push(`/users/${this.props.userProperties.id}`);
    }
  }


  componentDidMount(){
    this.props.fetchUser(this.props.params.user_id);
  }

  componentWillUpdate(nextProps){
    if (nextProps.photos[0] && this.state.idx < 0) {
      let index;
      for(let i = 0; i < nextProps.photos.length; i++){
        if (nextProps.photos[i].id == this.props.params.id) {
          index = i;
        }
      }
      this.setState({ idx: index });
    }
  }

  render() {
    if (this.state.idx >= 0) {
      let prevButton, nextButton;
      if (this.state.idx > 0) {
        prevButton = <i className="material-icons arrow left-arrow" onClick={ this.handleNav(-1)} >keyboard_arrow_left</i>;
      }
      if (this.state.idx < this.props.photos.length-1) {
        nextButton = <i className="material-icons arrow right-arrow" onClick={ this.handleNav(1) }>keyboard_arrow_right</i>;
      }
      return(
        <div className="view-photo-container">
          <div className="view-photo-user">
            <img src={ this.props.userProperties.image_url } className="user-icon"></img>
            <Link to={ `/users/${ this.props.userProperties.id }` }
              >{ this.props.userProperties.username }</Link>
          </div>
          { prevButton }
          <div className="view-photo-div">
            <img src={ this.props.photos[this.state.idx].image_url } className="photo"></img>
          </div>
          <i className="material-icons delete" onClick={this.deletePhoto}>delete_forever</i>
          { nextButton }
        </div>
      );
    } else {
      return null;
    }
  }
}
export default withRouter(ViewPhoto);
