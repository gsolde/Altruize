import React, { useState } from 'react';
import './Nav.css';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';


export default function Nav () {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  //TODO change when login is connected
  const [fakeUser, setFakeUser] = useState({
    user_name: 'Gerard',
    profile_pic: 'https://media-exp1.licdn.com/dms/image/C4D03AQEuhw7UQwbX5A/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=CJ7wNArHAR2JQhlbCWOaTUh2i6JjK6YiuR9bQD3GPCo',
  });
  //!
  const isLoggedIn = useSelector(state => state.isLoggedIn);

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
            {isLoggedIn ?
              <Avatar alt={fakeUser.user_name} src={`${fakeUser.profile_pic}`} className={classes.small} />
              :
              <AccountCircleIcon style={{ color: 'white' }} />
            }
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
            {isLoggedIn ? (
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

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  }
}));