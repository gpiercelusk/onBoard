import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar bg-danger">
      <h1>
        <Link to='/'>
          <i className="fas fa-dice-d20" /> onBoard
        </Link>
      </h1>
      <ul>
        <li><a href="profiles.html">Gamers</a></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
