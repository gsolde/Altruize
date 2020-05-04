import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/Nav/Nav';
import Home from './pages/home/Home';
import About from './pages/about/About';
import AddEventPage from './pages/addEventPage/AddEventPage';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import NotFound from './pages/notfound/NotFound';

import PrivateRoute from './pages/PrivateRoute';


function App () {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/addEvent">
            <AddEventPage />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
