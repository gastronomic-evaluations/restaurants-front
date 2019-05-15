import React, { useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import useFetch from '../../hooks/useDataFetch'
import { RouteContext } from '../../contexts/contexts'
import Loader from '../Loader'
import { exclude } from '../../services/restaurantService'
import Ratings from './Ratings'
import Convenience from './Convenience'
import MoreInfo from './MoreInfo'

function DetailComponent({ data }) {
  const {match, history} = useContext(RouteContext)
  const style = {
    container: {textAlign: 'right', color: '#999'},
    button: {marginRight: '10px'}
  }
  const editRestaurant = () => history.push(`/restaurants/${match.params.id}`)
  const excludeRestautant = () => exclude({id: data._id, history})

  return (
    <div className="App">
      <header className="App-header">
        <Card className="card">
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">{ data.title }</Typography>
            <Typography component="p">{data.observations}</Typography>
            <Ratings data={data} />
            <Convenience data={data} />

            <Divider className="divider" />

            <div style={style.container}>
              <Button variant="outlined" size="small" color="secondary" onClick={ excludeRestautant } style={style.button}>
                Excluir
              </Button>

              <Button variant="outlined" size="small" color="primary" onClick={ editRestaurant } >
                Editar
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <MoreInfo data={data} />
      </header>
    </div>
  )
}

function Detail() {
  const {match} = useContext(RouteContext)
  const {data, loaded} = useFetch(`/restaurants/${match.params.id}`)
  
  return loaded
    ? <DetailComponent data={data} />
    : <Loader />
}

export default Detail