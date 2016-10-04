import React from 'react';
import HeaderContainer from './header/header_container';

const WelcomePage = ({ children }) => (
  <div>
    <HeaderContainer />
    { children }
  </div>
);

export default WelcomePage;
