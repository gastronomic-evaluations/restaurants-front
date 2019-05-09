import React, { useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarRate from '@material-ui/icons/StarRate';
import {RouteContext} from '../contexts/contexts'
import useFetch from '../hooks/useDataFetch'
import Loader from './Loader';


function Home() {
  const {history} = useContext(RouteContext)
  const {data, loaded} = useFetch('/restaurants')
  
  return loaded
    ? (
    <div className="App">
      <header className="App-header">
        {
          data.map(({ _id, title, rating }) => (
            <Card key={_id} className="card">
              <CardActionArea>
                <CardContent onClick={() => history.push(`/restaurants/${_id}`)}>
                  <Typography gutterBottom variant="h5" component="h2">
                    { title }
                  </Typography>
                  <Typography component="p">
                    {Array(Math.floor(rating/2)).fill().map(()=>(<StarRate style={{color: '#fdbd39'}}/>))}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </header>
    </div>
  ) : <Loader />
}

export default Home