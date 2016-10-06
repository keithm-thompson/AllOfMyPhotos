import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <p>Hello</p>
    { children }
  </div>
);
export default App;
