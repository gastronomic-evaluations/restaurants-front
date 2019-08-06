import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Route from './routes/Route'
import './App.scss'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#d13232' },
  },
});

function App(){
  return (
    <MuiThemeProvider theme={theme}>
      <main className="main">
        <Route />
      </main>
    </MuiThemeProvider>
  )
}

export default App