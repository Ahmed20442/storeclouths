// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LogIn from './components/LogIn ';
import SignIn from './components/SignIn';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import HomeScreen from './components/HomeScreen';
import Profile from './components/Profile ';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/login" component={LogIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/kids" component={Kids} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/Header" component={Header} />
      </Switch>
    </Router>
  );
};

export default App;
