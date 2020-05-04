import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav/Nav';

import Home from './pages/Home';
import About from './pages/About';


function App () {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/profile" component={Profile}/> */}
      </div>
    </Router>
  );
}

export default App;
