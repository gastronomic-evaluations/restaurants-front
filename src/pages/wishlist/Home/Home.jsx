import React from 'react'
import useFetch from 'hooks/useDataFetch'
import Loader from 'components/Loader/Loader'
import ActionButton from  'components/ActionButton/ActionButton'
import { Link } from 'react-router-dom'
import { Delete } from '@material-ui/icons'
import Empty from 'components/Empty/Empty'
import { exclude } from 'services/abstractService'
import Container from 'components/Container'
import Confirmation from 'components/Modal/Confirmation'

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
      <Confirmation
        handleClose={handleClose}
        open={open}
        description="Você realmente deseja excluir esse item?"
        action={ () =>  exclude({ id, path: '/wishlist', setData, list: wishlist }) }
      />
      <Link className="wish__link" to={`/wishlist/edit/${id}`}>{name}</Link>
      <Delete color="action" className="wish__delete" onClick={handleClickOpen} />
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
    <Container>
      { loaded ? renderView(wishlist) : <Loader /> }

      <ActionButton data-test="create">
        <Link to="/wishlist/create">+</Link>
      </ActionButton>
    </Container>
  )
}

export default Home