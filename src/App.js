import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Joyride from 'react-joyride';

import { isNewuser, setOnboarding } from './services/onboarding'
import Route from './routes/Route'
import './App.scss'

const steps = [
  {
    target: '.onboarding-restaurants',
    content: 'Aqui você pode ver a lista de lugares que você já avaliou!',
  },
  {
    target: '.onboarding-wishlist',
    content: 'Aqui você pode ver a lista de lugares que você pretende ir!',
  },
  {
    target: '.onboarding-signout',
    content: 'Clique aqui para sair da sua conta!',
  },
  {
    target: '.onboarding-restaurants__add',
    content: 'Clique aqui para avaliar um novo lugar!',
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
      { isNewuser() && (
        <Joyride
          steps={steps}
          continuous={true}
          styles={{
            options: {
              primaryColor: theme.palette.primary.dark,
            }
          }}
        />
      )}
      { setOnboarding() }
      <main className="main">
        <Route />
      </main>
    </MuiThemeProvider>
  )
}

export default App