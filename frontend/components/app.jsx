import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => {
  debugger
  return(
  <div className="app-container">
    <HeaderContainer />
    { children }
  </div>
)};
export default App;
