import React from 'react';

const Footer = (props) => {
  if(!props.route || props.route.path !== "/users/:user_id/photos/:id") {
    return(
      <div className="footer group">
        <div className="footer-logo">Welcome to AllOfMyPhotos.</div>
        <ul>
          <li>
            <a href="https://www.github.com/keithm-thompson/allofmyphotos"> Visit The Git Repo! </a>
          </li>
        </ul>
      </div>
      );
  } else {
    return null;
  }
};

export default Footer;
