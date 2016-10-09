import React from 'react';
import classNames from 'classnames';

export default class UserPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHovered: false};
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(){
    this.setState({ isHovered: true });
  }

  handleMouseLeave(){
    this.setState({ isHovered: false });
  }


  render() {

    let liClassName = classNames({
      'user-photo-container': true,
      'img-hover': this.state.isHovered
    });
    

    return (
      <li className={liClassName} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <img className="user-photo" src={this.props.imageUrl}></img>
      </li>
    );
  }
}
