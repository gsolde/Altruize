import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { indigo, pink, red, teal } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink,
  },
});



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  edit: {
    margin: theme.spacing(1),
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
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} alt="user.image{}" src="https://media-exp1.licdn.com/dms/image/C4D03AQEuhw7UQwbX5A/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=CJ7wNArHAR2JQhlbCWOaTUh2i6JjK6YiuR9bQD3GPCo" />
          <div>
            <Button
              variant="contained"
              color={editMode ? 'secondary' : 'primary'}
              className={classes.edit}
              startIcon={editMode ? <SaveIcon /> : <EditIcon />}
              onClick={handleEditMode}
            >
              {editMode ? 'Save changes' : 'Edit Profile'}
            </Button>
          </div>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  disabled={editMode ? false : true}
                  required
                  fullWidth
                  id="firstName"
                  label="firstName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  disabled={editMode ? false : true}
                  id="lastName"
                  label="lastName"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  disabled={editMode ? false : true}
                  id="location"
                  label="Location"
                  name="location"
                  autoComplete="Location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={2}
                  rowsMax={4}
                  disabled={editMode ? false : true}
                  name="about"
                  label="About me"
                  id="multiline"
                // type="password"
                // autoComplete="current-password"
                />
              </Grid>
              {!editMode ?
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
              color={editMode ? 'secondary' : 'primary'}
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