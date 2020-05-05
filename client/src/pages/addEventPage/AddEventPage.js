import React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const theme = createMuiTheme({
  palette: { primary: teal, secondary: grey },
  status: { danger: 'orange' }
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: '110%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  date: {
    width: '110%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  description: {
    width: '110%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(2, 0, 6),
  },
}));

export default function AddEventPage() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Create Event
        </Typography>
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
            className={classes.date}
            required
            id="datetime-local"
            label="Date"
            type="datetime-local"
            defaultValue="2020-06-01T12:00"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
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
          <TextareaAutosize
            className={classes.description}
            aria-label="minimum height"
            rowsMin={4}
            placeholder="Description"
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
    </MuiThemeProvider>
  );
}