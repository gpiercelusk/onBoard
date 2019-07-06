import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-wrapper">
      <nav>
        <Link to='/'>onBoard</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/menu'>Menu</Link>
      </nav>
    </div>
  )
}

export default Nav;