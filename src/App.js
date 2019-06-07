import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core'
import { Add, Home, ChevronLeft } from '@material-ui/icons'

import Route from './routes/Route'
import './App.scss'

function App(){
  const [state, setState] = useState({value: 0})

  return (
    <>
      <Paper square className="paper">
        <Route />
      </Paper>
      <BottomNavigation
        value={state.value}
        showLabels
        className="bottom-navigation"
        onChange={(event, value) => setState({ value }) }
      >
        <BottomNavigationAction label="Voltar" icon={<ChevronLeft />} onClick={() => window.history.back()} />
        <BottomNavigationAction label="Inicio" icon={<Home />} onClick={() => window.location = '/#/restaurants'} />
        <BottomNavigationAction label="Criar" icon={<Add />} onClick={() => window.location = '/#/restaurants/create'} />
      </BottomNavigation>
    </>
  )
}

export default App