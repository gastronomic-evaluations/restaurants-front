import React, { useContext } from 'react'
import { Typography, Divider, Button } from '@material-ui/core'

import useFetch from 'hooks/useDataFetch'
import { RouteContext } from 'contexts/contexts'
import Loader from 'components/Loader/Loader'
import { exclude } from 'services/abstractService'
import Ratings from 'components/Detail/Ratings'
import Convenience from 'components/Detail/Convenience'
import MoreInfo from 'components/Detail/MoreInfo'
import './detail.scss'

function DetailComponent({ data }) {
  const {match, history} = useContext(RouteContext)
  const { title, order, observations, _id: id } = data

  const style = {
    container: {textAlign: 'right', color: '#999'},
    button: {marginRight: '10px'}
  }

  const editRestaurant = () => history.push(`/restaurants/${match.params.id}`)
  const excludeRestautant = () => {
    exclude({ id, history, path: '/restaurants' })
    history.goBack()
  }

  return (
    <div className="detail">
      <div className="detail__content">
        <Typography gutterBottom variant="h4" component="h2">{title}</Typography>

        <Typography gutterBottom variant="h6" component="h3">Pedido</Typography>
        <Typography component="p">{order}</Typography>
        <Typography gutterBottom variant="h6" component="h4">Observações</Typography>
        <Typography component="p">{observations}</Typography>

        <Ratings data={data} />
        <Convenience data={data} />
        <MoreInfo data={data} />
        <Divider className="divider" />

        <div style={style.container}>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={excludeRestautant}
            style={style.button}
          >
            Excluir
          </Button>

          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={editRestaurant}
          >
            Editar
          </Button>
        </div>
      </div>
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