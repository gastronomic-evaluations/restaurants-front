import React, { useState } from 'react'
import {
  Slide,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'
import { EventNote, Fastfood, Person } from '@material-ui/icons'

import Confirmation from 'components/Modal/Confirmation'
import { logout } from '../services/auth'

function Navigation() {
  const [state, setState] = useState({value: 0})
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutModal = () => {
    logout()
    handleClose()
    window.location = '/#/login'
  }

  return (
    <div>
      <Confirmation
        handleClose={handleClose}
        open={open}
        description="Você realmente deseja sair?"
        action={logoutModal}
      />
      <Slide direction="up" in={true} timeout={2000}>
        <BottomNavigation
          value={state.value}
          showLabels
          className="bottom-navigation"
          onChange={(event, value) => setState({ value }) }
        >
          <BottomNavigationAction className="icon onboarding-restaurants" label="Lugares" icon={<Fastfood />} onClick={() => window.location = '/#/restaurants'} />
          <BottomNavigationAction className="icon onboarding-wishlist" label="Wishlist" icon={<EventNote />} onClick={() => window.location = '/#/wishlist'} />
          <BottomNavigationAction className="icon onboarding-signout" label="Sair" icon={<Person />} onClick={handleClickOpen} />
        </BottomNavigation>
      </Slide>
    </div>
  )
}

export default Navigation