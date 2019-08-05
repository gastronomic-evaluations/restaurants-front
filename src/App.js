import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { EventNote, Fastfood, Person } from '@material-ui/icons'

import Route from './routes/Route'
import './App.scss'

function App(){
  const [state, setState] = useState({value: 0})

  return (
    <main className="main">
      <Route />
      <BottomNavigation
        value={state.value}
        showLabels
        className="bottom-navigation"
        onChange={(event, value) => setState({ value }) }
      >
        <BottomNavigationAction className="icon" label="Lugares" icon={<Fastfood />} onClick={() => window.location = '/#/restaurants'} />
        <BottomNavigationAction className="icon" label="Wishlist" icon={<EventNote />} onClick={() => window.location = '/#/wishlist'} />
        <BottomNavigationAction className="icon" label="Entrar" icon={<Person />} onClick={() => window.location = '/#/login'} />
      </BottomNavigation>
    </main>
  )
}

export default App