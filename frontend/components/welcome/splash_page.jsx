import React from 'react';
import Header from '../header/header';

export default class SplashPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {imageIdx: 0};
    this.images = [];
    for(let key in window.inspireMe) {
      this.images.push(window.inspireMe[key]);
    }
    this.handleInspireMe = this.handleInspireMe.bind(this);
  }

  handleInspireMe(e) {
    const imageIdx =  (this.state.imageIdx + 1) % this.images.length;
    this.setState({ imageIdx });
  }

  render () {
    this.backgroundImage = {backgroundImage: 'image-url(' + this.images[this.state.imageIdx] + ')'};

    return (
      <div className="splashPage">
        <div className="firstContentImage">
          <h3>The home for all your photos.</h3>
          <p>Upload, access, and organize your photos from anywhere in the world.</p>
          <button onClick={Header.handleClickOutside("signup")} className="button signup-style"> Sign up! </button>
        </div>
        <ul>
          <li className="firstImage">
            <h4> Never Delete a photo again</h4>
            <p>Upload as many photos as you would like! Never worry about losing your families history.</p>
          </li>
          <li className="secondImage">
            <h4> View your circle's amazing photos </h4>
            <p> Search and follow everyone to see all of their great uploads!</p>
          </li>
          <li className="thirdImage">
            <h4> Create Albums of your memories </h4>
            <p> Whether it's your kid's first birthday party, or Joe's super bowl party, easily organize your photos into album's.</p>
          </li>
        </ul>
        <div className="inspireMe" style={this.backgroundImage}>
          <h4>Breath-taking Inspiration</h4>
          <p>Stimulate your imagination.</p>
          <button className="inspireMeButton" onClick={this.handleInspireMe}> Inspire me</button>
        </div>
      </div>
    );
  }
}
