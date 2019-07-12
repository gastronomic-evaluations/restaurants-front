import React from 'react'
import useFetch from 'hooks/useDataFetch'
import Loader from 'components/Loader'
import Add from  'components/Add/Add'
import { Link } from 'react-router-dom'
import { Delete } from '@material-ui/icons'

import './home.scss'

function CardHome({ wish, exclude }) {
  const { name, _id } = wish

  return (
    <li className="wish">
      <Link className="wish__link" to={`/wishlist/edit/${_id}`}>{name}</Link>
      <Delete className="wish__delete" onClick={() => exclude(_id)} />
    </li>
  )
}

function Home() {
  const {data: wishlist, setData, loaded} = useFetch('/wishlist')

  function exclude(id) {
    fetch(`${process.env.REACT_APP_API_URL}/wishlist/${id}`, { method: 'DELETE' })
    const data = wishlist.filter(({_id}) => _id !== id)
    setData(data)
  }
  
  return (
    <section className="wishlist">
      {
        loaded
          ? wishlist.map(wish => <CardHome key={wish._id} exclude={exclude} wish={wish} />)
          : <Loader />
      }

      <Add path="/wishlist/create" />
    </section>
  )
}

export default Home