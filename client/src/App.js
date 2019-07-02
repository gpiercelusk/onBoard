import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signuppage" component={SignUpPage} />
        <Route exact path="/signinpage" component={SignInPage} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
  );
}

export default App;
