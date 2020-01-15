import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Joyride from 'react-joyride';


import Route from './routes/Route'
import './App.scss'

const steps = [
  {
    target: '.onboarding-restaurants',
    content: 'This is my awesome feature!',
  },
  {
    target: '.onboarding-restaurants__add',
    content: 'This another awesome feature!',
  }
]

const theme = createMuiTheme({
  palette: {
    primary: { main: '#d13232' },
  },
});

function App(){
  return (
    <MuiThemeProvider theme={theme}>
      <Joyride
        steps={steps}
        continuous={true}
        showProgress={true}
        spotlightClicks={true}
        styles={{
          options: {
            primaryColor: theme.palette.primary.dark,
          }
        }}
      />
      <main className="main">
        <Route />
      </main>
    </MuiThemeProvider>
  )
}

export default App