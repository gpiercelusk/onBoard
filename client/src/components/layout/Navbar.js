import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i class="fas fa-dice-d20"></i> onBoard</a>
      </h1>
      <ul>
        <li><a href="profiles.html">Gamers</a></li>
        <li><a href="resgister.html">Register</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
