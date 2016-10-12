import React from 'react';

export default class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      imageFile: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  handleUpload(e) {}

  updateFile(e) {
    e.preventDefault();

    let file = e.currentTarget.files[0];
    this.setState({ imageFile: file });

    let title = this.state.title;
    if (title.length === 0) {
      title = file.name.match(/(.+?)(\.[^.]*$|$)/)[1];
    }

    let formData = new FormData();
    formData.append("photo[title]", title);
    formData.append("photo[image]", file);

    this.props.uploadPhoto(formData);
  }

  updateTitle(e) {
    e.preventDefault();
    this.setState({ title: e.currentTarget.value });
  }

  render(){

    return (
      <form className="upload-file-form">
        <div className="upload-photo-div"></div>
          <div className="upload-photo-text">
            <h3>Upload all of your photos! Never run out of space again.</h3>
            <label htmlFor="file" className="signup-style">Upload a file!</label>
            <input className="inputfile" type="file" id="file" onChange={ this.updateFile } ></input>
          </div>
      </form>
    );

  }
}
