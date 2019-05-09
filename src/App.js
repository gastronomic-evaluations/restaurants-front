import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import Route from './routes/Route'
import './App.scss'

const styles = theme => ({
  paper: {
    paddingTop: 30,
    paddingBottom: 100,
    background: 'transparent !important'
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

function App(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Route />
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <IconButton color="inherit" onClick={ () => window.history.back() }>
              <KeyboardArrowLeftIcon />
            </IconButton>
          </div>
          <Fab color="secondary" aria-label="Add" className={classes.fabButton} onClick={() => window.location = '/#/create' }>
            <AddIcon />
          </Fab>
          <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
