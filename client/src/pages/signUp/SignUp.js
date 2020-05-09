import React, { useState } from 'react';
import { addUser } from '../../services/UsersAPI';
import { addOrg } from '../../services/OrgsAPI';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { indigo, pink, red, teal } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch';

export default function SignUp() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({ user_name: '', email: '', password: ''});
  const [org, setOrg] = useState({ org_name: '', email: '', password: '', reg_number: '' });


  function updateUser(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function updateOrg(event) {
    setOrg({
      ...org,
      [event.target.name]: event.target.value,
    });
  }

  function resetInputFields() {
    if (checked) {
      return setOrg({
        org_name: '',
        email: '',
        password: ''
      });
    } else {
      return setUser({
        user_name: '',
        email: '',
        password: ''
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (checked) {
      addOrg(org);
    } else {
      addUser(user);
    }
    resetInputFields();
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
            Sign up
          </Typography>
          <Typography className={classes.caption} component="subtitle1" variant="caption">
            {checked ?
              'You want to find events to help near you? Flip the switch and go for a USER account.'
              :
              'If your are an NGO that wants to create & manage Events, flip the switch.'}
          </Typography>
          <ToggleSwitch toggleChecked={toggleChecked} checked={checked} />
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  variant="outlined"
                  required
                  fullWidth
                  id={checked ? 'org_name' : 'user_name'}
                  name={checked ? 'org_name' : 'user_name'}
                  label={checked ? 'Organization' : 'User Name'}
                  autoFocus
                  value={checked ? org.org_name : user.user_name}
                  onChange={checked ? event => updateOrg(event) : event => updateUser(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  // required
                  fullWidth
                  id={checked ? 'reg_number' : 'lastName'}
                  name={checked ? 'reg_number' : 'lastName'}
                  label={checked ? 'Registration number' : 'Last Name'}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  value={checked ? org.email : user.email}
                  onChange={checked ? event => updateOrg(event) : event => updateUser(event)}
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
                  value={checked ? org.password : user.password}
                  onChange={checked ? event => updateOrg(event) : event => updateUser(event)}
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
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Log in</Link>
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