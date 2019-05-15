import React, { useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {RouteContext} from '../contexts/contexts'
import useFetch from '../hooks/useDataFetch'
import Loader from './Loader';
import Stars from  './Starts'


function Home() {
  const {history} = useContext(RouteContext)
  const {data, loaded} = useFetch('/restaurants')
  
  return (
    <div className="App">
      <header className="App-header">
        {
          loaded
          ? data.map(({ _id, title, rating, date }) => (
              <Card key={_id} className="card">
                <CardActionArea>
                  <CardContent onClick={() => history.push(`/restaurants/details/${_id}`)}>
                    <Typography gutterBottom variant="h5" component="h2">
                      { title }
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      { new Date(date).toLocaleDateString("en-US") }
                    </Typography>
                    <Typography component="p">
                      <Stars check={rating} amount={rating / 2} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          : <Loader />
        }
      </header>
    </div>
  )
}

export default Home