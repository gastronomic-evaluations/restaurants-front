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
              <span style={style}><b>Ocasião:</b> {data.ocasion}</span>
              <span style={style}><b>Conhecido por:</b> {data.knowFor}</span>
              <span style={style}><b>Fama:</b> {data.fame}</span>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </header>
    </div>
  ) : <Loader />
}

export default Detail