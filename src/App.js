import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { EventNote, Fastfood } from '@material-ui/icons'

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
        {/* <BottomNavigationAction label="Perfil" icon={<Person />} onClick={() => window.history.back()} /> */}
      </BottomNavigation>
    </main>
  )
}

export default App