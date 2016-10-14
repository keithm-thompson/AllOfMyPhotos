import React from 'react';
import { Link, withRouter } from 'react-router';
import classNames from 'classnames';
import TagItem from './tag_item';

class ViewPhoto extends React.Component {

  constructor(props){
    super(props);

    this.state = { idx: -1,
                  mouseIdle: true,
                  zoomedOut: true,
                  tagName: ""
                };
    this.handleNav = this.handleNav.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.showActions = this.showActions.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTagInput = this.handleTagInput.bind(this);
    this.handleTagSubmit = this.handleTagSubmit.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
  }

  handleNav(num) {
    return (e) => {
      let currentIdx = this.state.idx;
      this.setState({ idx: currentIdx += num });
    };
  }

  handleTagInput(e) {
    e.preventDefault();
    this.setState({ tagName: e.currentTarget.value });
  }

  handleTagSubmit(e) {
    e.preventDefault();
    if(this.state.tagName.length > 0) {
      this.props.addTagToPhoto(
        this.props.photos[this.state.idx].id,
        this.state.tagName
      );
      this.setState({ tagName: "" });
    }
  }

  handleRemoveTag(tagId) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.props.removeTagFromPhoto(
        this.props.photos[this.state.idx].id,
        tagId
      );
    };
  }

  handleSearch(tagName) {
    return (e) => {
      e.preventDefault();
      this.props.router.push(`/search/photos?${tagName}`);
    };
  }

  deletePhoto() {
    this.props.deletePhoto(this.props.photos[this.state.idx].id);
    // add promise
    let index = this.state.idx;

    if (index > 0) {
      this.setState({ idx: --index});
    } else if (index < this.props.photos.length) {
      this.setState({ idx: index});
    } else {
      this.props.router.push(`/users/${this.props.userProperties.id}`);
    }
  }

  toggleZoom() {
    this.setState({ zoomedOut: !this.state.zoomedOut });
  }

  showActions(){
    this.setState({mouseIdle: false});
    window.clearTimeout(this.setTimeout);
    this.setTimeout = setTimeout(()=>{
      this.setState({mouseIdle: true});
    }, 1300);
  }

  hideActionsClasses(){
    this.viewPhotoContainerClasses = classNames({
      'view-photo-container': true
    });

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

    this.viewPhotoDivClass = classNames({
      'view-photo-div': true
    });

    this.photoClass = classNames({
      'photo': true
    });

    this.zoomToggleButton = classNames({
      'material-icons': true,
      'toggle-zoom': true
    });
  }

  showActionsClasses(){
    this.viewPhotoContainerClasses = classNames({
      'view-photo-container': true
    });

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

    this.viewPhotoDivClass = classNames({
      'view-photo-div': true
    });

    this.photoClass = classNames({
      'photo': true
    });

    this.zoomToggleButton = classNames({
      'material-icons': true,
      'on-move': true,
      'toggle-zoom': true
    });

  }

  handleZoomedOut() {
    this.viewPhotoContainerClasses = classNames({
      'view-photo-container': true,
      'zoomed-out-container': true
    });

    this.userInfoClass = classNames({
      'view-photo-user': true,
      'on-move-user-info': true,
      'zoomed-out-user-info': true
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
      'on-move': true,
      'zoomed-out-delete': true
    });

    this.viewPhotoDivClass = classNames({
      'view-photo-div': true,
      'zoomed-out-photo-div': true
    });

    this.photoClass = classNames({
      'photo': true,
      'zoomed-out-photo': true
    });

    this.zoomToggleButton = classNames({
      'material-icons': true,
      'on-move': true,
      'toggle-zoom': true
    });
  }

  addZoomedOutElements() {
    let tagInputForm;
    const tags = this.props.photos[this.state.idx].tags.map((tag) => {
      let isUsersPhoto = this.props.currentUser.id === this.props.userProperties.id;
      return <TagItem key={tag.tag_id}
        tagName={ tag.tag_name }
        handleSearch={ this.handleSearch(tag.tag_name) }
        handleDelete={ this.handleRemoveTag(tag.tag_id) }
        isUsersPhoto={ isUsersPhoto }/>;
    });

    this.title = <h5 className="photo-title">{ this.props.photos[this.state.idx].title }</h5>;
    this.uploadedTime = <h5>Uploaded on { this.props.photos[this.state.idx].uploadedOn }</h5>;
    this.linkToPhotos = <div>
                      <Link to={ `/users/${this.props.userProperties.id}`} className="link-to-photos-text"
                        ><i className="material-icons link-to-photos-arrow"  >arrow_back</i> Back to photos</Link>;
                    </div>;

    if (this.props.userProperties.id === this.props.currentUser.id) {
      tagInputForm = <form onSubmit={ this.handleTagSubmit } className="add-tag-form">
        <input type="text"
          placeholder="Add Tag"
          className="add-tag-input"
          value={ this.state.tagName }
          onChange={ this.handleTagInput }></input>
      </form>;
    }

    this.tagsContainer = <div className="tags-container">
                    { tagInputForm }
                      <ul className="tags">
                        { tags }
                      </ul>
                    </div>;

    this.toggleZoomButton = <i className={ this.zoomToggleButton } onClick={this.toggleZoom}>fullscreen</i>;
  }

  removeZoomedOutElements() {
    this.tagsContainer = null;
    this.title = null;
    this.uploadedTime = null;
    this.linkToPhotos = null;
    this.tagsContainer = null;
  }

  componentWillUpdate(nextProps){
    if (nextProps.photos[0] && this.state.idx < 0) {
      let index;
      for(let i = 0; i < nextProps.photos.length; i++){
        if (nextProps.photos[i].id == this.props.params.id) {
          index = i;
          this.setState({ idx: index });
        }
      }
    }
  }

  render() {

    if (this.state.zoomedOut) {
      this.handleZoomedOut();
    } else if (this.state.mouseIdle) {
      this.hideActionsClasses();
    } else {
      this.showActionsClasses();
    }

    if (this.state.idx >= 0) {
      let prevButton, nextButton, deleteButton;
      if (this.state.idx > 0) {
        prevButton = <i className={ this.prevButtonClass } onClick={ this.handleNav(-1)} >keyboard_arrow_left</i>;
      }
      if (this.state.idx < this.props.photos.length-1) {
        nextButton = <i className={ this.nextButtonClass } onClick={ this.handleNav(1) }>keyboard_arrow_right</i>;
      }
      if (this.state.zoomedOut) {
        this.addZoomedOutElements();
      } else {
        this.removeZoomedOutElements();
        this.toggleZoomButton = <i className={ this.zoomToggleButton } onClick={this.toggleZoom}>fullscreen_exit</i>;
      }

      if (this.props.userProperties.id === this.props.currentUser.id) {
        deleteButton = <i className={ this.deleteButtonClass } onClick={this.deletePhoto}>delete_forever</i>;
        }

      return(
        <div className={this.viewPhotoContainerClasses} onMouseMove={this.showActions}>
          <div className={ this.userInfoClass }>
            <img src={ this.props.userProperties.image_url } className="user-icon"></img>
            <Link to={ `/users/${ this.props.userProperties.id }` }
              >{ this.props.userProperties.username }</Link>
            { this.title }
          </div>
          { this.tagsContainer }
          <div className="uploaded-on">
            { this.uploadedTime }
          </div>
          { this.toggleZoomButton }
          { this.linkToPhotos }
          { prevButton }
          <div className={ this.viewPhotoDivClass }>
            <img src={ this.props.photos[this.state.idx].image_url } className={ this.photoClass }></img>
          </div>
          { deleteButton }
          { nextButton }
        </div>
      );
    } else {
      return null;
    }
  }
}
export default withRouter(ViewPhoto);
