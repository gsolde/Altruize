import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { indigo, pink, red, teal } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { isUserLoggedIn, orgId, userId } from '../../actions';
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch';
import { getOrgLogin } from '../../services/OrgsAPI';
import { getUserLogin } from '../../services/UsersAPI';




export default function LoginForm () {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
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

  async function handleSubmit (event) {
    event.preventDefault();
    setLoading(true);
    let loggedElement;
    if (checked) {
      loggedElement = await getOrgLogin({ org_email: user.email, org_password: user.password });
    } else {
      loggedElement = await getUserLogin({ user_email: user.email, user_password: user.password });
    }

    if (loggedElement === 'Invalid email or password') {
      setMessage('Invalid email or password');
      setError(true);

    } else {
      setMessage('Succesfully logged in!');
      dispatch(isUserLoggedIn());
      checked ? dispatch(orgId(loggedElement.id)) : dispatch(userId(loggedElement.id));
      return history.replace(from);
    };

    resetInputFields();
    setTimeout(() => {
      setLoading(false);
      setError(false);
      setMessage(null);
    }, 3000);
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
          <Typography className={classes.caption} variant="caption">
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
                  type="email"
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
                  autoComplete="password"
                  value={user.password}
                  onChange={event => updateUser(event)}
                />
              </Grid>
              {!checked ?
                (
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      className={classes.facebook}
                    >
                      Facebook
                </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      className={classes.google}
                    >
                      Google
                </Button>
                  </Grid>
                )
                : null
              }
              {loading ?
                <Typography className={error ? classes.error : classes.success} variant="caption">
                  {message}
                </Typography>
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
  error: {
    margin: theme.spacing(2),
    color: 'red',
  },
  success: {
    margin: theme.spacing(2),
    color: 'green',
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
