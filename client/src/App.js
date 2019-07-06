import React, { Fragment } from 'react';
import './App.css';
//import Link from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import Feed from './pages/Feed';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
}

export default App;
