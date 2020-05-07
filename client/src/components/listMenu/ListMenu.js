import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: grey,
  },
  status: {
    danger: 'orange',
  },
});
export default function ListMenu () {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>Near me</Button>
          <Button>Up next</Button>
          <Button>Fav Tags</Button>
        </ButtonGroup>
      </div>
    </MuiThemeProvider>
  );
}