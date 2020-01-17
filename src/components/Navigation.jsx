import React, { useState } from 'react'
import {
  Slide,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Button,
} from '@material-ui/core'
import { EventNote, Fastfood, Person } from '@material-ui/icons'
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmação"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você realmente deseja sair?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={logoutModal} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
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