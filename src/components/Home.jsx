import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

import useFetch from '../hooks/useDataFetch'

function Home() {
  const {data, setData, loaded} = useFetch('/restaurants')

  const exclude = async id => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/restaurants/${id}`, {
      method: 'DELETE'
    })
    
    console.log(response)
    const newData = data.filter(({_id}) => _id !== id )
    setData(newData)
  }
  
  return loaded && (
    <div className="App">
      <header className="App-header">
        {
          data.map(({ _id, title, rating }) => (
            <Card key={_id} className="card">
              <CardActionArea>
                <CardMedia
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    { title }
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={`/${_id}`}>Editar</Link>
                </Button>
                <Button size="small" color="primary" onClick={ () => exclude(_id) }>
                  Excluir
                </Button>
              </CardActions>
            </Card>
          ))
        }
      </header>
    </div>
  )
}

export default Home