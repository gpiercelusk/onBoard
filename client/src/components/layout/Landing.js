import React from 'react'
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large"><i className="fas fa-dice-d20"></i> onBoard</h1>
          <p className="lead">
            <h1>The best way to make a kickback less stressful</h1>
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-danger">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Landing
