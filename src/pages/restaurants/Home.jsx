import React, { useContext } from 'react'
import { Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'

import {RouteContext} from 'contexts/contexts'
import useFetch from 'hooks/useDataFetch'
import Loader from 'components/Loader/Loader'
import Stars from  'components/Stars/Stars'
import ActionButton from  'components/ActionButton/ActionButton'
import Empty from 'components/Empty/Empty'
import Container from  'components/Container'

import './home.scss'

function CardHome({ restaurant }) {
  const { _id, title, date, ratings } = restaurant
  const {history} = useContext(RouteContext)

  const goToDetail = () => history.push(`/restaurants/details/${_id}`)
  const getRating = ({food, environment, price, service}) => {
    return (food + environment + price + service) / 4
  }

  return (
    <section onClick={goToDetail} className="home-card">
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
  const {data: restaurants, loaded} = useFetch('/restaurants')

  function renderView(restaurants) {
    return restaurants.length
      ? restaurants.map(restaurant => <CardHome restaurant={restaurant} key={restaurant._id} />)
      : <Empty />
  }

  return (
    <Container>
      {
        loaded
          ? renderView(restaurants)
          : <Loader />
      }

      <ActionButton>
        <Link className="onboarding-restaurants__add" to="/restaurants/create">+</Link>
      </ActionButton>
    </Container>
  )
}

export default Home