import React, { useState, useEffect } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { EventNote, Fastfood, Person } from '@material-ui/icons'
import { logout } from '../services/auth'

function Navigation() {
  const [state, setState] = useState({value: 0})

  return (
    <BottomNavigation
      value={state.value}
      showLabels
      className="bottom-navigation"
      onChange={(event, value) => setState({ value }) }
    >
      <BottomNavigationAction className="icon" label="Lugares" icon={<Fastfood />} onClick={() => window.location = '/#/restaurants'} />
      <BottomNavigationAction className="icon" label="Wishlist" icon={<EventNote />} onClick={() => window.location = '/#/wishlist'} />
      <BottomNavigationAction className="icon" label="Sair" icon={<Person />} onClick={() => {
        window.location = '/#/login'
        logout()
      }} />
    </BottomNavigation>
  )
}

export default Navigation