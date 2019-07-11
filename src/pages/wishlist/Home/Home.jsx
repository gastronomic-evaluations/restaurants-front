import React, { Fragment } from 'react'
import useFetch from 'hooks/useDataFetch'
import Loader from 'components/Loader'
import Add from  'components/Add/Add'
import { Link } from 'react-router-dom'
import { Delete } from '@material-ui/icons'

import './home.scss'

function CardHome({ wish }) {
  const { name, _id } = wish

  return (
    <li className="wish">
      <Link className="wish__link" to={`/wishlist/edit/${_id}`}>{ name }</Link>
      <Delete className="wish__delete" />
    </li>
  )
}

function Home() {
  const {data: wishlist, loaded} = useFetch('/wishlist')
  
  return (
    <section className="wishlist">
      {
        loaded
          ? wishlist.map(wish => <CardHome key={wish._id} wish={wish} />)
          : <Loader />
      }

      <Add path="/wishlist/create" />
    </section>
  )
}

export default Home