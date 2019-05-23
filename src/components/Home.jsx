import React, { useContext } from 'react'
import {Card, CardActionArea, CardContent, Typography} from '@material-ui/core'

import {RouteContext} from '../contexts/contexts'
import useFetch from '../hooks/useDataFetch'
import Loader from './Loader'
import Stars from  './Starts'

function CardHome({ restaurant }) {
  const { _id, title, date, ratings } = restaurant
  const {history} = useContext(RouteContext)

  const goToDetail = () => history.push(`/restaurants/details/${_id}`)
  const getRating = ({food, environment, price, service}) => {
    return (food + environment + price + service) / 4
  }


  return (
    <Card className="card">
      <CardActionArea>
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
      </CardActionArea>
    </Card>
  )
}

function Home() {
  const {data: restaurants, loaded} = useFetch('/restaurants')
  
  return (
    <div className="App">
      <header className="App-header">
        {
          loaded
            ? restaurants.map(restaurant => (<CardHome key={restaurant._id} restaurant={restaurant} />))
            : <Loader />
        }
      </header>
    </div>
  )
}

export default Home