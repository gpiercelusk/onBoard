import React from 'react';
import FormButtons from '../components/FormButtons';
import { Link, withRouter } from "react-router-dom";

function Landing() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="header">
                    <h1>onBoard</h1>
                    <h1>The best way to make a kickback less stressful</h1>
                </div>
                <div className="buttons">
                    <FormButtons />
                    <div className="sign-in">
                        Already have an accout? <Link to="/signinpage"><strong>Sign in</strong></Link> here!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;