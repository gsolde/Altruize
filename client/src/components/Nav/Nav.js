import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Nav () {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="nav-wrapper">
      <div className="name">
        <Link to="/">ALTRUIZE</Link>
      </div>
      <div className="addEvent-login-options">
        <button className="add-event-btn">
          <Link to="/addEvent">Add Event</Link>
        </button>
        <div className="log-in-btn">
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <AccountCircleIcon style={{ color: 'white' }} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/profile">Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/login">Log in</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/about">About</Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}