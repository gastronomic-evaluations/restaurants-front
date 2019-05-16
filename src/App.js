import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core'
import { Add, Home, ChevronLeft } from '@material-ui/icons'

import Route from './routes/Route'
import './App.scss'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    paddingBottom: 15,
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
          <BottomNavigationAction label="Voltar" icon={<ChevronLeft />} onClick={() => window.history.back()} />
          <BottomNavigationAction label="Inicio" icon={<Home />} onClick={() => window.location = '/#/restaurants'} />
          <BottomNavigationAction label="Criar" icon={<Add />} onClick={() => window.location = '/#/restaurants/create'} />
        </BottomNavigation>
      </>
    );
  }
}

export default withStyles(styles)(App)