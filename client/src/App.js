import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './components/Nav/Nav';

import Home from './pages/Home';
import About from './pages/About';
import AddEventPage from './pages/AddEventPage';
import Login from './pages/Login';
import Profile from './pages/Profile';


function App () {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/addEvent" component={AddEventPage} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
