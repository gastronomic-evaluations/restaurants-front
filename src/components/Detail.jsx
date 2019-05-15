import React, { useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import useFetch from '../hooks/useDataFetch'
import { RouteContext } from '../contexts/contexts'
import Loader from './Loader'
import { exclude } from '../services/restaurantService'
import Stars from './Starts'
import Convenience from './Convenience'

const style = {
  display: 'block'
}

const dividerStyle = {
  margin: '15px 0'
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
          <div style={{display: 'inline', color: '#999'}}>
            <EditIcon onClick={ () => history.push(`/restaurants/${match.params.id}`) } />
            <DeleteIcon onClick={ () => exclude({id: data._id, history}) }/>
          </div>

            <Divider style={dividerStyle}/>
            
            <Typography gutterBottom variant="h6" component="h3">
              Observações
            </Typography>
            <Typography component="p">
              {data.observations}
            </Typography>

            { data.ratings && (
              <>
                <Divider style={dividerStyle}/>
                
                <Typography component="p">
                  <span style={{position: 'relative', top: '-8px'}}>Serviço:</span> <Stars check={data.ratings} amount={data.ratings.service} />
                </Typography>
                <Typography component="p">
                  <span style={{position: 'relative', top: '-8px'}}>Lugar:</span> <Stars check={data.ratings} amount={data.ratings.environment} />
                </Typography>
                <Typography component="p">
                  <span style={{position: 'relative', top: '-8px'}}>Preço:</span> <Stars check={data.ratings} amount={data.ratings.price} />
                </Typography>
                <Typography component="p">
                  <span style={{position: 'relative', top: '-8px'}}>Comida:</span> <Stars check={data.ratings} amount={data.ratings.food} />
                </Typography>
              </>
            )}

            { data.convenience && (
              <>
                <Divider style={dividerStyle}/>

                <Convenience check={data.convenience.wifi} label="Wi-fi" />
                <Convenience check={data.convenience.music} label="Música" />
                <Convenience check={data.convenience.goodForCouples} label="Bom para casais" />
                <Convenience check={data.convenience.goodForGroups} label="Bom para grupos" />
                <Convenience check={data.convenience.goodWines} label="Bons vinhos" />
                <Convenience check={data.convenience.funny} label="Divertido" />
              </>
            )}
            
          </CardContent>
        </Card>
        
        <ExpansionPanel style={{width: '90%', margin: '0 5%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><b>Detalhes</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography component="div" style={{width: '100%'}}>
              { data.waitTime && <span style={style}><b>Tempo de espera:</b> {data.waitTime}</span> }
              { data.ocasion && <span style={style}><b>Ocasião:</b> {data.ocasion}</span> }
              { data.knowFor && <span style={style}><b>Conhecido por:</b> {data.knowFor}</span> }
              { data.address && <span style={style}><b>Endereço:</b> {data.address}</span> }

              { data.recomendations && (
                <>
                  <Divider style={dividerStyle}/>

                  <b style={{marginBottom: '10px', display: 'block'}}>Recomendações</b>
                  { data.recomendations.askNext && <span style={style}><b>Pedir nas próximas:</b> {data.recomendations.askNext}</span> }
                  { data.recomendations.neverAsk && <span style={style}><b>Nunca pedir:</b> {data.recomendations.neverAsk}</span> }
                  { data.recomendations.hasOwnProperty('worth') && <span style={style}><b>Vale a pena:</b> {data.recomendations.worth ? 'Sim' : 'Não'}</span> }
                </>
              )}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </header>
    </div>
  ) : <Loader />
}

export default Detail