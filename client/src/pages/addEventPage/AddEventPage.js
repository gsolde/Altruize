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

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEventPic = (e) => {
    setEventPic(URL.createObjectURL(e.target.files[0]));
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
                required
                className={classes.time}
                id="time-picker"
                label="Start"
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <KeyboardTimePicker
                required
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
              id="eventName"
              name="eventName"
              label="Event"
              fullWidth
              autoComplete="ename"
            />
            <TextField
              className={classes.form}
              required
              id="location"
              name="location"
              label="Location"
              fullWidth
              autoComplete="locname"
            />
            {/* <TextField
              className={classes.form}
              required
              id="tags"
              name="tags"
              label="Tags"
              fullWidth
              autoComplete="tagname"
            /> */}
            <TextField
              required
              className={classes.description}
              id="outlined-multiline-static"
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