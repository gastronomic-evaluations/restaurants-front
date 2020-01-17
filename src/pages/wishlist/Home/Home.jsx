import React from 'react'
import useFetch from 'hooks/useDataFetch'
import Loader from 'components/Loader/Loader'
import ActionButton from  'components/ActionButton/ActionButton'
import { Link } from 'react-router-dom'
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import Empty from 'components/Empty/Empty'
import { exclude } from 'services/abstractService'

import './home.scss'

function CardHome({ wish, wishlist, setData}) {
  const { name, _id: id } = wish
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <li className="wish">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmação"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você realmente deseja excluir esse item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={() =>  exclude({ id, path: '/wishlist', setData, list: wishlist })} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
      <Link className="wish__link" to={`/wishlist/edit/${id}`}>{name}</Link>
      <Delete className="wish__delete" onClick={handleClickOpen} />
    </li>
  )
}

function Home() {
  const {data: wishlist, setData, loaded} = useFetch('/wishlist')

  function renderView(restaurants) {
    return restaurants.length
      ? wishlist.map(wish =>  <CardHome key={wish._id} setData={setData} wishlist={wishlist} wish={wish} />)
      : <Empty />
  }
  
  return (
    <section className="wishlist">
      {
        loaded
          ? renderView(wishlist)
          : <Loader />
      }

      <ActionButton data-test="create">
        <Link to="/wishlist/create">+</Link>
      </ActionButton>
    </section>
  )
}

export default Home