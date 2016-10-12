import React from 'react';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';

const App = ({ children }) => {
  return(
  <div className="app-container" id="wrapper">
    <HeaderContainer />
      <div id="content" >
        { children }
      </div>
    <Footer id="footer" route={children.props.route}/>
  </div>
)};
export default App;
