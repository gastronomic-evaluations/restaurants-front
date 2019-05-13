import React, { useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import useFetch from '../hooks/useDataFetch'
import { RouteContext } from '../contexts/contexts'
import Loader from './Loader'
import { exclude } from '../services/restaurantService'

const style = {
  display: 'block'
}

function Detail() {
  const {match, history} = useContext(RouteContext)
  const {data, loaded} = useFetch(`/restaurants/${match.params.id}`)
  
  return loaded ? (
    <div className="App">
      <header className="App-header">
        <Card className="card">
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
              {data.observations}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={ () => history.push(`/restaurants/${match.params.id}`) }>
              Editar
            </Button>
            <Button size="small" color="primary" onClick={ () => exclude({id: data._id, history}) }>
              Excluir
            </Button>
          </CardActions>
        </Card>
        
        <ExpansionPanel style={{width: '90%', margin: '0 5%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><b>Detalhes</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography align="left">
              { data.waitTime && <span style={style}><b>Tempo de espera:</b> {data.waitTime}</span> }
              { data.ocasion && <span style={style}><b>Ocasião:</b> {data.ocasion}</span> }
              { data.knowFor && <span style={style}><b>Conhecido por:</b> {data.knowFor}</span> }
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {data.ratings &&
        <ExpansionPanel style={{width: '90%', margin: '0 5%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><b>Notas</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography align="left">
              { data.ratings.service && <span style={style}><b>Nota do serviço:</b> {data.ratings.service}</span> }
              { data.ratings.environment && <span style={style}><b>Nota do ambiente:</b> {data.ratings.environment}</span> }
              { data.ratings.price && <span style={style}><b>Nota do preço:</b> {data.ratings.price}</span> }
              { data.ratings.food && <span style={style}><b>Nota da comida:</b> {data.ratings.food}</span> }
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        }

        {data.recomendations &&
        <ExpansionPanel style={{width: '90%', margin: '0 5%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><b>Recomendações</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography align="left">
              { data.recomendations.askNext && <span style={style}><b>Pedir nas próximas:</b> {data.recomendations.askNext}</span> }
              { data.recomendations.neverAsk && <span style={style}><b>Nunca pedir:</b> {data.recomendations.neverAsk}</span> }
              { data.recomendations.hasOwnProperty('worth') && <span style={style}><b>Vale a pena:</b> {data.recomendations.worth ? 'Sim' : 'Não'}</span> }
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        }

        {data.address &&
        <ExpansionPanel style={{width: '90%', margin: '0 5%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><b>Endereço</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography align="left">
              { data.address.zipcode && <span style={style}><b>Logradouro:</b> {data.address.street} n: {data.address.number} - {data.address.zipcode}</span> }
              { data.address.city && <span style={style}><b>Cidade:</b> {data.address.city}</span> }
              { data.address.state && <span style={style}><b>Estado:</b> {data.address.state}</span> }
              { data.address.country && <span style={style}><b>Pais:</b> {data.address.country}</span> }
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        }
      </header>
    </div>
  ) : <Loader />
}

export default Detail