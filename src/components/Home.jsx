import React, { useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {RouteContext} from '../contexts/contexts'
import useFetch from '../hooks/useDataFetch'
import Loader from './Loader';
import Stars from  './Starts'
import formatDate from '../utils/formatDate/formatDate'

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
            { formatDate(date) }
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