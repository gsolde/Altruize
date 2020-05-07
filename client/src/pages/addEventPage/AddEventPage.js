import React, { useState } from 'react';

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
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Avatar from '@material-ui/core/Avatar';

export default function AddEventPage() {
  const classes = useStyles();
  const [eventPic, setEventPic] = useState('https://media-exp1.licdn.com/dms/image/C4D03AQEuhw7UQwbX5A/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=CJ7wNArHAR2JQhlbCWOaTUh2i6JjK6YiuR9bQD3GPCo');
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    date: null,
    startTime: null,
    finishTime: null,
    eventName: "",
    location: "",
    description: ""
  });

  function updateFormData(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function resetInputFields() {
    return setFormData({
      date: null,
      startTime: null,
      finishTime: null,
      eventName: "",
      location: "",
      description: ""
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    resetInputFields();
  }

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEventPic = (event) => {
    setEventPic(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container component="main" maxWidth="xs" className={classes.paper}>
          <React.Fragment>
            <Typography variant="h5" gutterBottom color="primary" className={classes.title}>
              Create Event
        </Typography>
            <input
              accept="image/*"
              disabled={editMode ? false : true}
              className={classes.addphoto}
              id="add-image-file"
              type="file"
              onChange={handleEventPic}
            />
            <label htmlFor="add-image-file">
              {eventPic.length > 0 ?
                <Avatar
                  className={classes.avatar}
                  alt="user.image{}" src={eventPic}
                  fontSize="large"
                  onClick={handleEditMode}
                />
                :
                <AddAPhotoIcon
                  // className={classes.avatar}
                  alt="user.image{}" src={eventPic}
                  fontSize="large"
                  onClick={handleEditMode}
                />
              }
            </label>
            <div className={classes.dateTime}>
              <KeyboardDatePicker
                required
                name="date"
                value={formData.date}
                onChange={event => setFormData({
                  ...formData,
                  date: event
                })}
                className={classes.form}
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                id="date-picker-inline"
                label="Date"
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </div>
            <div className={classes.dateTime}>
              <KeyboardTimePicker
                name="startTime"
                required
                value={formData.startTime}
                onChange={event => setFormData({
                  ...formData,
                  startTime: event
                })}
                className={classes.time}
                id="time-picker"
                label="Start"
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <KeyboardTimePicker
                required
                name="finishTime"
                value={formData.finishTime}
                onChange={event => setFormData({
                  ...formData,
                  finishTime: event
                })}
                id="time-picker"
                label="Finish"
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </div>
            <TextField
              className={classes.form}
              required
              value={formData.eventName}
              onChange={event => updateFormData(event)}
              id="eventName"
              name="eventName"
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
              autoComplete="locname"
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
              onClick={handleSubmit}
            >
              Add Event
          </Button>
          </React.Fragment>
        </Container>
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