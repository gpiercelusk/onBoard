import React, { Component } from 'react';
// import Nav from './components/Nav';
import { Link, withRouter } from "react-router-dom";

class SignUpPage extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  }
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          {/* <Nav /> */}
          {/* whatever the google component is called */}
          <div className="form">
            <input type="text"
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInput}
              placeholder="Enter First Name"
            />
            <input type="text"
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleInput}
              placeholder="Enter Last Name"
            />
            <input type="text"
              value={this.state.email}
              name="email"
              onChange={this.handleInput}
              placeholder="Enter Email"
            />
            <input type="text"
              value={this.state.password}
              name="password"
              onChange={this.handleInput}
              placeholder="Enter Password"
            />
            <Link to='/profile'>
              <button type='submit' onClick={this.handleFormSubmit}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpPage;