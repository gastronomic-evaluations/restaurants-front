import React, { useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import useFetch from '../hooks/useDataFetch'
import { RouteContext } from '../contexts/contexts';
import Loader from './Loader';

function Detail() {
  const {match, history} = useContext(RouteContext)
  const {data, loaded} = useFetch(`/restaurants/${match.params.id}`)
  
  const exclude = async id => {
    await fetch(`${process.env.REACT_APP_API_URL}/restaurants/${id}`, {
      method: 'DELETE'
    })

    history.goBack()
  }
  
  return loaded ? (
    <div className="App">
      <header className="App-header">
        <Card className="card">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                { data.title }
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Nota: { data.rating }
              </Typography>
              <Divider />
              <Typography gutterBottom variant="h6" component="h3">
                  Observações
                </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ () => history.push(`/${match.params.id}`) }>
              Editar
            </Button>
            <Button size="small" color="primary" onClick={ () => exclude(data._id) }>
              Excluir
            </Button>
          </CardActions>
        </Card>
      </header>
    </div>
  ) : <Loader />
}

export default Detail