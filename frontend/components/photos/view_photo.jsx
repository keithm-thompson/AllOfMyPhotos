import React from 'react';
import { Link, withRouter } from 'react-router';
import classNames from 'classnames';

class ViewPhoto extends React.Component {

  constructor(props){
    super(props);

    this.state = { idx: -1, mouseIdle: true };
    this.handleNav = this.handleNav.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.showActions = this.showActions.bind(this);
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

  showActions(){
    this.setState({mouseIdle: false});
    window.clearTimeout(this.setTimeout);
    this.setTimeout = setTimeout(()=>{
      this.setState({mouseIdle: true});
    }, 1300);
  }

  hideActionsClasses(){
    this.userInfoClass = classNames({
      'view-photo-user': true
    });

    this.prevButtonClass = classNames({
      'material-icons': true,
      'arrow': true,
      'left-arrow': true
    });

    this.nextButtonClass = classNames({
      'material-icons': true,
      'arrow': true,
      'right-arrow': true
    });

    this.deleteButtonClass= classNames({
      'material-icons': true,
      'delete': true,

    });
  }

  showActionsClasses(){
    this.userInfoClass = classNames({
      'view-photo-user': true,
      'on-move': true
    });

    this.prevButtonClass = classNames({
      'material-icons': true,
      'arrow': true,
      'left-arrow': true,
      'on-move': true
    });

    this.nextButtonClass = classNames({
      'material-icons': true,
      'arrow': true,
      'right-arrow': true,
      'on-move': true
    });

    this.deleteButtonClass= classNames({
      'material-icons': true,
      'delete': true,
      'on-move': true
    });
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


    if (this.state.mouseIdle) {
      this.hideActionsClasses();
    } else {
      this.showActionsClasses();
    }

    if (this.state.idx >= 0) {
      let prevButton, nextButton;
      if (this.state.idx > 0) {
        prevButton = <i className={ this.prevButtonClass } onClick={ this.handleNav(-1)} >keyboard_arrow_left</i>;
      }
      if (this.state.idx < this.props.photos.length-1) {
        nextButton = <i className={ this.nextButtonClass } onClick={ this.handleNav(1) }>keyboard_arrow_right</i>;
      }
      return(
        <div className="view-photo-container" onMouseMove={this.showActions}>
          <div className={ this.userInfoClass }>
            <img src={ this.props.userProperties.image_url } className="user-icon"></img>
            <Link to={ `/users/${ this.props.userProperties.id }` }
              >{ this.props.userProperties.username }</Link>
          </div>
          { prevButton }
          <div className="view-photo-div">
            <img src={ this.props.photos[this.state.idx].image_url } className="photo"></img>
          </div>
          <i className={ this.deleteButtonClass } onClick={this.deletePhoto}>delete_forever</i>
          { nextButton }
        </div>
      );
    } else {
      return null;
    }
  }
}
export default withRouter(ViewPhoto);
