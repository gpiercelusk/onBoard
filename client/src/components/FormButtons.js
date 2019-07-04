import React from "react";
import { Link, withRouter } from "react-router-dom";

function FormButtons() {
  return (
    <div className="buttons">
      <Link to='/signuppage'>
        <button className="singup-button">Sign Up</button>
      </Link>
      <Link to='/feed'>
        <button className="signup-button">Continue as Guest</button>
      </Link>
    </div>
  )
}


export default FormButtons;