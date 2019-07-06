// import React, { Component } from 'react';
// // import Nav from './components/Nav';
// import { Link, withRouter } from "react-router-dom";

// class SignInPage extends Component {
//   state = {
//     email: '',
//     password: ''
//   };

//   handleInput = event => {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value
//     });
//   };
//   handleFormSubmit = event => {
//     event.preventDefault();

//     this.setState({
//       email: '',
//       password: ''
//     });
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="wrapper">
//           {/* <Nav /> */}
//           {/* whatever the google component is called */}
//           <div className="sign-in-form">
//             <input type="text"
//               value={this.state.email}
//               name="email"
//               onChange={this.handleInput}
//               placeholder="Enter Email"
//             />
//             <input type="text"
//               value={this.state.password}
//               name="password"
//               onChange={this.handleInput}
//               placeholder="Enter Password"
//             />
//             <Link to='/profile'>
//               <button type='submit' onClick={this.handleFormSubmit}>Sign In</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default SignInPage;