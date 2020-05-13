import React, { useState } from 'react';
import { addEvent } from '../../services/EventsAPI';
import { useSelector, useDispatch } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';

import { useHistory, useLocation } from 'react-router-dom';

import { eventSelectionButton, eventSelection } from '../../actions';

export default function AddEventPage() {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const dispatch = useDispatch();
  const classes = useStyles();
  const orgId = useSelector((state) => state.orgId);
  const [formData, setFormData] = useState({
    start_date: null,
    finish_date: null,
    event_name: '',
    location: '',
    description: '',
    picture: ''
  });

  function updateFormData(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function resetInputFields() {
    return setFormData({
      start_date: null,
      finish_date: null,
      event_name: '',
      location: '',
      description: '',
      picture: ''
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await addEvent(formData, orgId);
    resetInputFields();
    dispatch(eventSelectionButton('MY EVENTS'));
    history.replace(from);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container component="main" maxWidth="xs" className={classes.paper}>
            <Typography variant="h5" gutterBottom color="primary" className={classes.title}>
              Create Event
            </Typography>
            <KeyboardDateTimePicker
              required
              name="start_date"
              value={formData.start_date}
              onChange={event => setFormData({
                ...formData,
                start_date: event
              })}
              className={classes.form}
              variant="inline"
              format="dd/MM/yyyy hh:mm a"
              id="date-picker-inline"
              label="Start"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardDateTimePicker
              required
              name="finish_date"
              value={formData.finish_date}
              onChange={event => setFormData({
                ...formData,
                finish_date: event
              })}
              className={classes.form}
              variant="inline"
              format="dd/MM/yyyy hh:mm a"
              id="date-picker-inline"
              label="Finish"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <TextField
              className={classes.form}
              required
              value={formData.event_name}
              onChange={event => updateFormData(event)}
              id="event_name"
              name="event_name"
              label="Event"
              fullWidth
            />
            <TextField
              className={classes.form}
              required
              onChange={event => updateFormData(event)}
              value={formData.location}
              id="location"
              name="location"
              label="Location"
              fullWidth
            />
            <TextField
              className={classes.form}
              required
              onChange={event => updateFormData(event)}
              value={formData.picture}
              id="picture"
              name="picture"
              label="Add an image url"
              fullWidth
            />
            <TextField
              required
              className={classes.description}
              onChange={event => updateFormData(event)}
              value={formData.description}
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add Event
          </Button>
          </Container>
        </form>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

const theme = createMuiTheme({
  palette: { primary: teal, secondary: grey },
  status: { danger: 'orange' }
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  description: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(4, 0, 6),
  },
  dateTime: {
    width: '100%', // Fix IE 11 issue.
    display: 'flex',
    marginTop: theme.spacing(1),
  },
  time: {
    width: '100%', // Fix IE 11 issue.
    display: 'flex',
    marginRight: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold'
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  addphoto: {
    display: 'none',
  },
}));