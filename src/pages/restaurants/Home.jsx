import React, { useContext } from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import {RouteContext} from 'contexts/contexts'
import useFetch from 'hooks/useDataFetch'
import Loader from 'components/Loader/Loader'
import Stars from  'components/Stars/Stars'
import ActionButton from  'components/ActionButton/ActionButton'
import Empty from 'components/Empty/Empty'
import Container from  'components/Container'
import getRating from 'lib/getRating'

const cardStyle = {
  margin: '20px 0',
  background: 'white',
  textAlign: 'center',
  borderRadius: '10px',
  boxShadow: '0 2px 2px #ccc',
  padding: '20px 0',
}

function CardHome({ restaurant }) {
  const { _id, title, date, ratings } = restaurant
  const { history } = useContext(RouteContext)

  const goToDetail = () => history.push(`/restaurants/details/${_id}`)

  return (
    <section onClick={goToDetail} style={cardStyle}>
      <Typography gutterBottom variant="h5" component="h2">
        { title }
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        { date }
      </Typography>

      <Stars check={ratings} amount={getRating(ratings)} />
    </section>
  )
}

function Home() {
  const { data: restaurants, loaded } = useFetch('/restaurants')

  function renderView() {
    return restaurants.length
      ? restaurants.map(restaurant => <CardHome restaurant={restaurant} key={restaurant._id} />)
      : <Empty />
  }

  return (
    <Container>
      { loaded ? renderView() : <Loader /> }

      <ActionButton>
        <Link className="onboarding-restaurants__add" to="/restaurants/create">+</Link>
      </ActionButton>
    </Container>
  )
}

export default Home