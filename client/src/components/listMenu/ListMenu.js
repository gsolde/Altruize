import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { eventSelectionButton, eventSelection } from '../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '350px',
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
});

export default function ListMenu() {
  const userId =  useSelector((state) => state.userId);
  const orgId =  useSelector((state) => state.orgId);
  
  const history = useHistory();
  const { from } = { from: { pathname: "/login" } };

  const dispatch = useDispatch();
  const classes = useStyles();
  const selection = (useSelector((state) => state.eventSelectionButton))
  const [selected, setSelected] = useState(selection);

  function handleClickUser(e) {
    const eventSelector = e.target.innerText;
    setSelected(eventSelector);
    dispatch(eventSelectionButton(eventSelector));
    if (!userId && selected === 'ALL EVENTS') history.replace(from);
  }

  function handleClickOrg(e) {
    const eventSelector = e.target.innerText;
    setSelected(eventSelector);
    dispatch(eventSelectionButton(eventSelector));
    dispatch(eventSelection(eventSelector));
  }

  function handleRedirection() {
    dispatch(eventSelection('CREATE EVENT'));
    dispatch(eventSelectionButton('CREATE EVENT'));
    history.replace('/addEvent');
  }
  
  if (!orgId) {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button
              variant={selected === 'ALL EVENTS' ? 'contained' : 'outlined'}
              onClick={handleClickUser}
            >ALL EVENTS
            </Button>
            <Button
              variant={selected === 'MY EVENTS' ? 'contained' : 'outlined'}
              onClick={handleClickUser}
            >MY EVENTS
            </Button>
          </ButtonGroup>
        </div>
      </MuiThemeProvider>
    );
  } else {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button
              variant={selected === 'MY EVENTS' ? 'contained' : 'outlined'}
              onClick={handleClickOrg}
            >MY EVENTS
            </Button>
            <Button
              variant={selected === 'CREATE EVENT' ? 'contained' : 'outlined'}
              onClick={handleRedirection}
            >CREATE EVENT
            </Button>
          </ButtonGroup>
        </div>
      </MuiThemeProvider>
    );
  }
}
