import React, { useState } from 'react';
import './Nav.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { isUserLoggedIn, userInfo, orgInfo, userId, orgId, eventSelectionButton} from '../../actions';


export default function Nav () {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const userPic = useSelector(state => state.userInfo.profile_pic);
  const userName = useSelector(state => state.userInfo.user_name);
  const organizationId = useSelector(state => state.orgId)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    dispatch(isUserLoggedIn());
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
              <Avatar alt={userName} src={`${userPic}`} className={classes.small} />
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
              <Link style={{fontSize: '13px'}} className="link-accent" to="/profile">Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link style={{fontSize: '13px'}} className="link-accent" to="/about">About</Link>
            </MenuItem>
            {isLoggedIn ? (
              <MenuItem onClick={handleClose}>
                <div style={{fontSize: '13px'}} onClick={handleLogOut}>
                  Log out
                </div>
              </MenuItem>
            ) : (
                <MenuItem onClick={handleClose}>
                  <Link style={{fontSize: '13px'}} className="link-accent" to="/login">Log in</Link>
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