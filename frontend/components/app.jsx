import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => {
  return(
  <div className="app-container">
    <HeaderContainer />
    { children }
  </div>
)};
export default App;
