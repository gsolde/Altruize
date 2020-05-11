import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { indigo, pink, red, teal } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import fakeAuth from '../../FakeAuth';
import { isUserLoggedIn, userId, orgId } from '../../actions';
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch';

import { addUser } from '../../services/UsersAPI';
import { addOrg } from '../../services/OrgsAPI';

export default function LoginForm () {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });
  const { from } = location.state || { from: { pathname: "/" } };


  function updateUser (event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function resetInputFields () {
    return setUser({
      email: '',
      password: ''
    });
  }

  function handleSubmit (event) {
    event.preventDefault();
    //TODO check if user valid with correct API call
    // if (checked) {
    //   addOrg(user);
    // } else {
    //   addUser(user);
    // }
    //TODO await response to pass payload to dispatch
    //if error show message
    //if succes show message and dispatch
    dispatch(isUserLoggedIn());
    dispatch(userId(1));
    dispatch(orgId(1));
    resetInputFields();
    //TODO set time out to show a Succesfull or error login before redirecting
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  }

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={checked ? classes.avatarNGO : classes.avatarUser}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Typography className={classes.caption} component="subtitle1" variant="caption">
            {checked ?
              'Login as a NGO, if you are a Person, flip the switch'
              :
              'Login as a Person, if you are an NGO, flip the switch.'}
          </Typography>
          <ToggleSwitch toggleChecked={toggleChecked} checked={checked} />
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  value={user.email}
                  onChange={event => updateUser(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={event => updateUser(event)}
                />
              </Grid>
              {!checked ?
                (
                  <Grid item xs={12}>
                    <Button
                      type="login"
                      fullWidth
                      variant="contained"
                      color="blue"
                      className={classes.facebook}
                    >
                      Facebook
                </Button>
                    <Button
                      type="login"
                      fullWidth
                      variant="contained"
                      color="red"
                      className={classes.google}
                    >
                      Google
                </Button>
                  </Grid>
                )
                : null
              }
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color={checked ? 'secondary' : 'primary'}
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/signUp">You don't have an account yet? Sign up</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </MuiThemeProvider>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink,
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarUser: {
    margin: theme.spacing(1),
    backgroundColor: teal[200],
  },
  avatarNGO: {
    margin: theme.spacing(1),
    backgroundColor: pink[200],
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  caption: {
    margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  google: {
    margin: theme.spacing(0.5, 0, 0.5),
    backgroundColor: red.A200,
    color: 'white',
  },
  facebook: {
    margin: theme.spacing(0.5, 0, 0.5),
    backgroundColor: indigo[800],
    color: 'white',
  },
}));
