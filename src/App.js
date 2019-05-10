import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Add from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Paper from '@material-ui/core/Paper';

import Route from './routes/Route'
import './App.scss'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    borderTop: '1px solid #ccc'
  },
  paper: {
    paddingTop: 30,
    paddingBottom: 100,
    background: 'transparent !important',
    minHeight: '100vh'
  },
};

class App extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <>
        <Paper square className={classes.paper}>
          <Route />
        </Paper>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Voltar" icon={<ChevronLeftIcon />} onClick={() => window.history.back()} />
          <BottomNavigationAction label="Inicio" icon={<HomeIcon />} onClick={() => window.location = '/#/restaurants'} />
          <BottomNavigationAction label="Criar" icon={<Add />} onClick={() => window.location = '/#/restaurants/create'} />
        </BottomNavigation>
      </>
    );
  }
}

export default withStyles(styles)(App)