import React from "react";
import { Link, withRouter } from "react-router-dom";

function FormButtons() {
    return(
        <div className="buttons">
            <Link to='/signuppage'>
                <button className="singup-button">Sign Up</button>
            </Link>
            <button className="singup-button">Continue as Guest</button>
        </div>
    )
}


export default FormButtons;