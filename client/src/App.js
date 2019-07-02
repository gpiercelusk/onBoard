import React from 'react';
import './App.css';
import Link from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signuppage" component={SignUpPage} />
              <Route exact path="/signinpage" component={SignInPage} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
