import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header-wrapper">
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
  )
}