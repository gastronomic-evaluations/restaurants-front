import React from 'react'
import useFetch from 'hooks/useDataFetch'
import Loader from 'components/Loader/Loader'
import ActionButton from  'components/ActionButton/ActionButton'
import { Link } from 'react-router-dom'
import { Delete } from '@material-ui/icons'
import Empty from 'components/Empty/Empty'
import { exclude } from 'services/abstractService'

import './home.scss'

function CardHome({ wish, wishlist, setData}) {
  const { name, _id: id } = wish

  return (
    <li className="wish">
      <Link className="wish__link" to={`/wishlist/edit/${id}`}>{name}</Link>
      <Delete className="wish__delete" onClick={() =>  exclude({ id, path: '/wishlist', setData, list: wishlist })} />
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