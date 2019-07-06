import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import Feed from './pages/Feed';
import Profile from './pages/Profile';

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
              <Route exact path="/feed" component={Feed} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </Router>
        </div>
      </div>

    </div>
  );
}

export default App;
