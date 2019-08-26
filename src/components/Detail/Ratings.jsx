import React from 'react'
import { Divider, Typography } from '@material-ui/core'

import Stars from '../Stars/Stars'

function Ratings({ data }) {
  const {ratings} = data
  const { service, food, environment, price } = ratings
  const style = {position: 'relative', top: '-8px'}

  return (
    <>
      <Divider className="divider" />
      
      <Typography component="p">
        <span style={style}>Serviço:</span>
        <Stars check={ratings} amount={service} />
      </Typography>

      <Typography component="p">
        <span style={style}>Lugar:</span>
        <Stars check={ratings} amount={environment} />
      </Typography>

      <Typography component="p">
        <span style={style}>Preço:</span>
        <Stars check={ratings} amount={price} />
      </Typography>

      <Typography component="div">
        <span style={style}>Comida:</span>
        <Stars check={ratings} amount={food} />
      </Typography>
    </>
  )
}

export default Ratings