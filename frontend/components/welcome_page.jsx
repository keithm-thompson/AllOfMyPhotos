import React from 'react';
import HeaderContainer from './header/header_container';
import SplashPage from './welcome/splash_page';
import Footer from './footer/footer';

const WelcomePage = () => (
  <div  id="wrapper">
    <HeaderContainer />
    <div id="content">
      <SplashPage />
    </div>
    <Footer  id="footer"/>
  </div>
);
export default WelcomePage;
