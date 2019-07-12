import React, { useContext } from 'react'
import {CardContent, Typography} from '@material-ui/core'

import {RouteContext} from 'contexts/contexts'
import useFetch from 'hooks/useDataFetch'
import Loader from 'components/Loader'
import Stars from  'components/Starts'
import Add from  'components/Add/Add'
import './home.scss'

function CardHome({ restaurant }) {
  const { _id, title, date, ratings } = restaurant
  const {history} = useContext(RouteContext)

  const goToDetail = () => history.push(`/restaurants/details/${_id}`)
  const getRating = ({food, environment, price, service}) => {
    return (food + environment + price + service) / 4
  }


  return (
    <div className="home">
      <section className="home__card">
        <CardContent onClick={goToDetail}>
          <Typography gutterBottom variant="h5" component="h2">
            { title }
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            { date }
          </Typography>
          <Typography component="p">
            <Stars check={ratings} amount={getRating(ratings)} />
          </Typography>
        </CardContent>
      </section>
    </div>
  )
}

function Home() {
  const {data: restaurants, loaded} = useFetch('/restaurants')
  
  return (
    <>
      {
        loaded
          ? restaurants.map(restaurant => <CardHome restaurant={restaurant} key={restaurant._id} />)
          : <Loader />
      }

      <Add path="/restaurants/create" />
    </>
  )
}

export default Home