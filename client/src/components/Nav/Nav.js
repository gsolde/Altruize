import React from 'react';
import './Nav.css';

export default function Nav () {
  return (
    <div className="nav-wrapper">
      <div className="name">
        ALTRUIZE
      </div>
      <div className="addEvent-login-options">
        <button className="add-event-btn">
          Add Event
        </button>
        <button className="log-in-btn">
          Log in
        </button>
      </div>
    </div>
  );
}