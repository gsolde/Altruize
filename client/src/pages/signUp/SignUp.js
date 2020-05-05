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
import { Link } from "react-router-dom";
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch';




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

export default function SignUp () {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

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
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name={checked ? 'NGO Name' : 'firstName'}
                  variant="outlined"
                  required
                  fullWidth
                  id={checked ? 'NGO Name' : 'firstName'}
                  label={checked ? 'NGO Name' : 'First Name'}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id={checked ? 'Register code' : 'lastName'}
                  label={checked ? 'Register code' : 'LastName'}
                  name={checked ? 'Register code' : 'Last Name'}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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