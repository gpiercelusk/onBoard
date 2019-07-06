import React from 'react'

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large"><i class="fas fa-dice-d20"></i> onBoard</h1>
          <p className="lead">
            <h1>The best way to make a kickback less stressful</h1>
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">Sign Up</a>
            <a href="login.html" className="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Landing
