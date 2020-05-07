import React, { useState } from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import fakeAuth from '../../FakeAuth';

export default function Nav () {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="nav-wrapper">
      <div className="name">
        <Link className="link" to="/">ALTRUIZE</Link>
      </div>
      <div className="addEvent-login-options">
        <Button aria-controls="add-event-btn" aria-haspopup="true">
          <Link className="link" to="/addEvent">Add Event</Link>
        </Button>
        <div className="log-in-btn">
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <AccountCircleIcon style={{ color: 'white' }} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link className="link-accent" to="/profile">Profile</Link>
            </MenuItem>
            {fakeAuth.isAuthenticated ? (
              <MenuItem onClick={handleClose}>
                <Link className="link-accent" to="/login">Log out</Link>
              </MenuItem>
            ) : (
                <MenuItem onClick={handleClose}>
                  <Link className="link-accent" to="/login">Log in</Link>
                </MenuItem>
              )
            }
            <MenuItem onClick={handleClose}>
              <Link className="link-accent" to="/about">About</Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}