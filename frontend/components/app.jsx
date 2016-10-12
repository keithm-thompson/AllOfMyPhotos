import React from 'react';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';

const App = ({ children }) => {
  return(
  <div className="app-container">
    <HeaderContainer />
      { children }
    <Footer />
  </div>
)};
export default App;
