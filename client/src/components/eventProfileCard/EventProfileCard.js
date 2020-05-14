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
import 'date-fns';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import { useSelector, useDispatch } from 'react-redux';
import { updateEvent } from '../../services/EventsAPI';
import { currentEventInfo } from '../../actions';

export default function SignUp() {
  const classes = useStyles();
  const currentEvent = useSelector((state) => state.currentEventInfo);
  const [eventName, setEventName] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      event_id: currentEvent.id,
      event_name: eventName,
      description: description,
      start_date: startDate,
      finish_date: endDate,
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
              src={picture}
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
              {editMode ? 'Discard changes' : 'Edit Event'}
            </Button>
          </div>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
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
                  onChange={handleLocation}
                  variant="outlined"
                  value={location}
                  required
                  fullWidth
                  disabled={editMode ? false : true}
                  id="location"
                  label="Location"
                  name="location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleStartDate}
                  variant="outlined"
                  value={moment(startDate).format('lll')}
                  required
                  fullWidth
                  disabled={editMode ? false : true}
                  id="endDate"
                  label="Finish Date"
                  name="endDate"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleEndDate}
                  variant="outlined"
                  value={moment(endDate).format('lll')}
                  required
                  fullWidth
                  disabled={editMode ? false : true}
                  id="endDate"
                  label="Finish Date"
                  name="endDate"
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
                />
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
    margin: theme.spacing(3),
    backgroundColor: 'primary',
    color: 'white',
  },
  discard: {
    margin: theme.spacing(3),
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
    backgroundColor: pink[500],
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
