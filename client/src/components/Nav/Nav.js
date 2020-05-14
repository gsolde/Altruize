import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { eventSelectionButton, orgId, orgInfo, userId, userInfo } from '../../actions';
import { persistantLoginOrg } from '../../services/OrgsAPI';
import { persistantLoginUser } from '../../services/UsersAPI';
import './Nav.css';


export default function Nav () {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const isLoggedIn = localStorage.getItem('altruize-token');
  const userPic = useSelector(state => state.userInfo.profile_pic);
  const userName = useSelector(state => state.userInfo.user_name);
  const orgName = useSelector(state => state.orgInfo.org_name);
  const orgPic = useSelector(state => state.orgInfo.profile_pic);
  const avatarData = { name: userName || orgName, pic: userPic || orgPic };

  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    if (isLoggedIn) {
      const loggedUser = await persistantLoginUser();
      const loggedOrg = await persistantLoginOrg();
      if (!loggedUser && !loggedOrg) handleLogOut();
      if (loggedUser) {
        dispatch(userId(loggedUser.id));
        dispatch(userInfo(loggedUser));
      } else if (loggedOrg) {
        dispatch(orgId(loggedOrg.id));
        dispatch(orgInfo(loggedOrg));
      }
      dispatch(eventSelectionButton('MY EVENTS'));
    }
    return;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(userId(''));
    dispatch(orgId(''));
    dispatch(userInfo({}));
    dispatch(orgInfo({}));
    dispatch(eventSelectionButton('ALL EVENTS'));
    localStorage.removeItem("altruize-token");
    return history.push("/");
  };


  return (
    <div className="nav-wrapper">
      <div className="name">
        <Link className="link" to="/">ALTRUIZE</Link>
      </div>
      <div className="addEvent-login-options">
        <div className="log-in-btn">
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            {isLoggedIn ?
              <Avatar alt={avatarData.name} src={`${avatarData.pic}`} className={classes.small} />
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
              <Link className="link-accent" to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="link-accent" to="/profile">Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="link-accent" to="/about">About</Link>
            </MenuItem>
            {isLoggedIn ? (
              <MenuItem onClick={handleClose}>
                <div onClick={handleLogOut}>
                  Log out
                </div>
              </MenuItem>
            ) : (
                <MenuItem onClick={handleClose}>
                  <Link className="link-accent" to="/login">Log in</Link>
                </MenuItem>
              )
            }
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