import React, { useState } from 'react';
import './SignUp.css'
import { addUser } from '../../services/UsersAPI';
import { addOrg } from '../../services/OrgsAPI';
import { Link, useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch';
import { indigo, pink, red, teal, green } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';

export default function SignUp() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [checkIfUserExists, setCheckIfUserExists] = useState(false);
  const [checkIfEmailExists, setCheckIfEmailExists] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [user, setUser] = useState({ user_name: '', email: '', password: '' });
  const [org, setOrg] = useState({ org_name: '', email: '', password: '', reg_number: '' });
  const history = useHistory();
  const { from } = { from: { pathname: "/login" } };

  const updateUser = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  const updateOrg = (event) => {
    setOrg({
      ...org,
      [event.target.name]: event.target.value,
    });
  }

  const resetInputFields = () => {
    if (checked) {
      return setOrg({ org_name: '', email: '', password: '' });
    } else {
      return setUser({ user_name: '', email: '', password: '' });
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (checked) {
      addOrg(org);
    } else {
      // TODO: handle case where email already exists
      const response = await addUser(user);
      if (response.status === 403) {
        setCheckIfUserExists(!checkIfUserExists);
      } else if (response.status === 409) {
        setCheckIfEmailExists(!checkIfEmailExists);
      } else {
        setUserCreated(!userCreated);
        setCheckIfUserExists(false);
        setCheckIfEmailExists(false);
        setTimeout(() => history.replace(from), 3000);
      }
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
            <p className="created-message">
              {userCreated ? 'Success. Please wait while being redirected!' : ''}
            </p>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={checkIfUserExists ? true : false}
                  helperText={checkIfUserExists ? 'Account name already exists' : ''}
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
              <Grid item xs={12}>
                <TextField
                  error={checkIfEmailExists ? true : false}
                  helperText={checkIfEmailExists ? 'Email already used' : ''}
                  variant="outlined"
                  required
                  type="email"
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
    ternary: green
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
  }
}));