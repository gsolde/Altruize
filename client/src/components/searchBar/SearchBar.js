import React, { useState } from 'react';
import './SearchBar.css';

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

export default function SearchBar() {
  const classes = useStyles();
  const [search, setSearch] = useState(null);

  function handleSearch({ target }) {
    setSearch(target.value);
  }

  // TODO: reset input on submit (might not be working because we currently aren't doing anything with the input)
  function submitHandler(event) {
    event.preventDefault();
    setSearch(null);
  }

  return (
    <form className="search-wrapper" onSubmit={submitHandler}>
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button>Near me</Button>
            <Button>Up next</Button>
            <Button>Fav Tags</Button>
          </ButtonGroup>
        </div>
      </MuiThemeProvider>
    </form>
  )
}