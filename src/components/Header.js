import React from 'react';
import Nav from './Nav'


function Header(props) {
  return (
    <header>
        <h1> Josh Sandquist</h1>
        <Nav currentPage = {props.currentPage} setPage ={ props.setPage} />
    </header>
  );
}

export default Header;