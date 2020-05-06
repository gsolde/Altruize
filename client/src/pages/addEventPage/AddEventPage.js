import React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function AddEventPage() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container component="main" maxWidth="xs" className={classes.paper}>
          <React.Fragment>
            <Typography variant="h6" gutterBottom color="primary">
              Create Event
        </Typography>
            <div className={classes.dateTime}>
              <KeyboardDatePicker
                required
                className={classes.form}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id="date-picker-inline"
                label="Date"
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                required
                className={classes.time}
                id="time-picker"
                label="Time"
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
            <TextField
              className={classes.form}
              required
              id="tags"
              name="tags"
              label="Tags"
              fullWidth
              autoComplete="tagname"
            />
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
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(4, 0, 6),
  },
  dateTime: {
    display: 'flex',
    marginTop: theme.spacing(3),
  },
  time: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  }
}));