import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { pink, teal, grey } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
  addphoto: {
    display: 'none',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  edit: {
    margin: theme.spacing(1),
    backgroundColor: 'primary',
    color: 'white',
  },
  discard: {
    margin: theme.spacing(1),
    backgroundColor: grey.A200,
    color: 'white',
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SignUp () {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  const [profilePic, setProfilePic] = useState('https://media-exp1.licdn.com/dms/image/C4D03AQEuhw7UQwbX5A/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=CJ7wNArHAR2JQhlbCWOaTUh2i6JjK6YiuR9bQD3GPCo');

  const handleEditMode = () => {
    setEditMode(!editMode);
  };
  const handleProfilepic = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <input accept="image/*" disabled={editMode ? false : true} className={classes.addphoto} id="add-image-file" type="file" onChange={handleProfilepic} />
          <label htmlFor="add-image-file">
            <Avatar className={classes.avatar} alt="user.image{}" src={profilePic} />
          </label>
          <div>
            <Button
              variant="contained"
              color={editMode ? 'grey' : 'primary'}
              className={editMode ? classes.discard : classes.edit}
              startIcon={editMode ? <ClearIcon /> : <EditIcon />}
              onClick={handleEditMode}
            >
              {editMode ? 'Discard changes' : 'Edit Profile'}
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
              <Grid item xs={12}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Account Settings</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      disabled={editMode ? false : true}
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </ExpansionPanelDetails>
                  <ExpansionPanelDetails>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      disabled={editMode ? false : true}
                      id="Password"
                      label="Password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              {editMode ?
                (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color={editMode ? 'secondary' : 'primary'}
                    className={classes.submit}
                    startIcon={editMode ? <SaveIcon /> : <EditIcon />}
                    onClick={handleEditMode}
                  >
                    {editMode ? 'Save changes' : 'Edit Profile'}
                  </Button>
                )
                : null
              }
            </Grid>
          </form>
        </div>
      </Container>
    </MuiThemeProvider>
  );
}