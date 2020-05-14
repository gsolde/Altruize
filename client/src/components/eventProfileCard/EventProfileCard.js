import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { pink, teal, grey } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import { updateEvent } from '../../services/EventsAPI';
import { currentEventInfo } from '../../actions';

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

export default function SignUp() {
  const classes = useStyles();
  const currentEvent = useSelector((state) => state.currentEventInfo);
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [cancelled, setCancelled] = useState(null);
  const [picture, setPicture] = useState(
    'https://media-exp1.licdn.com/dms/image/C4D03AQEuhw7UQwbX5A/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=CJ7wNArHAR2JQhlbCWOaTUh2i6JjK6YiuR9bQD3GPCo'
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setEventName(currentEvent.event_name);
    setDescription(currentEvent.description);
    setLocation(currentEvent.location);
    setStartDate(currentEvent.start_date);
    setEndDate(currentEvent.end_date);
    setPicture(currentEvent.picture);
    setCancelled(currentEvent.cancelled);
  }, [currentEvent, editMode]);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };
  const handleEventName = (e) => {
    setEventName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handlePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleCancelled = (e) => {
    setCancelled(e.target.value);
  };

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      org_id: currentEvent.id,
      event_name: eventName,
      description: description,
      start_date: startDate,
      end_date: endDate,
      cancelled: cancelled,
      location: location,
      picture: picture,
    };
    const updatedEvent = await updateEvent(body);
    dispatch(currentEventInfo(updatedEvent[1][0]));
    setEditMode(!editMode);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <input
            accept="image/*"
            disabled={editMode ? false : true}
            className={classes.addphoto}
            id="add-image-file"
            type="file"
            onChange={handlePicture}
          />
          <label htmlFor="add-image-file">
            <Avatar
              className={classes.avatar}
              alt="user.image{}"
              src={profilePic}
            />
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
              <Grid item xs={12}>
                <TextField
                  // autoComplete="fname"
                  onChange={handleEventName}
                  name="Event Name"
                  value={eventName}
                  variant="outlined"
                  disabled={editMode ? false : true}
                  required
                  fullWidth
                  id="Event Name"
                  label="Event Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleCancelled}
                  variant="outlined"
                  value={cancelled}
                  required
                  fullWidth
                  disabled={editMode ? false : true}
                  id="cancelled"
                  label="Cancelled"
                  name="Cancelled"
                  // autoComplete="Location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleLocation}
                  variant="outlined"
                  value={location}
                  required
                  fullWidth
                  disabled={editMode ? false : true}
                  id="location"
                  label="Location"
                  name="location"
                  // autoComplete="Location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleStartDate}
                  variant="outlined"
                  value={startDate}
                  required
                  fullWidth
                  disabled={editMode ? false : true}
                  id="startDate"
                  label="startDate"
                  name="startDate"
                  // autoComplete="Location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleEndDate}
                  variant="outlined"
                  value={startDate}
                  required
                  fullWidth
                  disabled={editMode ? false : true}
                  id="endDate"
                  label="endDate"
                  name="endDate"
                  // autoComplete="Location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  onChange={handleDescription}
                  value={description}
                  required
                  fullWidth
                  multiline
                  rows={2}
                  rowsMax={4}
                  disabled={editMode ? false : true}
                  name="description"
                  label="Description"
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
                    <Typography className={classes.heading}>
                      Account Settings
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      disabled={editMode ? false : true}
                      onChange={handleEmail}
                      id="email"
                      label="Email"
                      name="email"
                      value={email}
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
                      onChange={handlePassword}
                      label="Password"
                      name="password"
                      type="password"
                      value={password}
                      autoComplete="current-password"
                    />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              {editMode ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color={editMode ? 'secondary' : 'primary'}
                  className={classes.submit}
                  startIcon={editMode ? <SaveIcon /> : <EditIcon />}
                  onClick={handleSubmit}
                >
                  {editMode ? 'Save changes' : 'Edit Profile'}
                </Button>
              ) : null}
            </Grid>
          </form>
        </div>
      </Container>
    </MuiThemeProvider>
  );
}
