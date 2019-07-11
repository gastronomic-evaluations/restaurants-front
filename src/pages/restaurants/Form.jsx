import React from 'react'
import {Button, Typography, Divider} from '@material-ui/core'

import AbstractInput from 'components/forms/AbstractInput'
import AbstractRadio from 'components/forms/AbstractRadio'

function Form() {
  return (
    <>
      <AbstractInput name="title" label="Nome do restaurante" />
      <AbstractInput name="date" label="Data" />
      <AbstractInput name="knowFor" label="Conhecido por" />
      <AbstractInput name="ocasion" label="Ocasião" />
      <AbstractInput name="waitTime" label="Tempo de espera" />
      <AbstractInput name="address" label="Endereço" />
      <AbstractInput name="order" label="Pedido" multiline={true} rows={3} />
      <AbstractInput name="observations" label="Observações" multiline={true} rows={5} />

      <Typography gutterBottom variant="h6" component="h5" style={{marginTop:'100px'}}>
        Notas
      </Typography>
      <div style={{display: 'flex'}}>
        <AbstractInput name="ratings.service" label="Serviço" fullWidth={false} />
        <AbstractInput name="ratings.environment" label="Lugar" fullWidth={false} />
        <AbstractInput name="ratings.price" label="Preço" fullWidth={false} />
        <AbstractInput name="ratings.food" label="Comida" fullWidth={false} />
      </div>

      <Typography gutterBottom variant="h6" component="h5" style={{marginTop:'100px'}}>
        Recomendações
      </Typography>

      <AbstractInput name="recomendations.askNext" label="Pedir nas próximas" />
      <AbstractInput name="recomendations.neverAsk" label="Nunca pedir" />
      <AbstractRadio name="recomendations.worth" label="Vale a pena?" />

      <Typography gutterBottom variant="h6" component="h5" style={{marginTop:'100px'}}>
        Conveniência
      </Typography>

      <AbstractRadio name="convenience.wifi" label="Wifi" />
      <AbstractRadio name="convenience.goodWines" label="Bons vinhos" />
      <AbstractRadio name="convenience.music" label="Música" />
      <AbstractRadio name="convenience.goodForGroups" label="Bom para grupos" />
      <AbstractRadio name="convenience.funny" label="Divertido" />
      <AbstractRadio name="convenience.goodForCouples" label="Bom para casais" />
      <AbstractRadio name="convenience.airConditioning" label="Ar-condicionado" />
      <AbstractRadio name="convenience.acceptReserve" label="Reservas" />
      <AbstractRadio name="convenience.acceptCards" label="Aceita Cartões" />
      <AbstractRadio name="convenience.goodDrinks" label="Drinks" />
      <AbstractRadio name="convenience.openLate" label="Aberto até tarde" />
      <AbstractRadio name="convenience.outdoorTables" label="Ar livre" />
      <AbstractRadio name="convenience.parking" label="Estacionamento" />

      <Divider />

      <Button className="send" type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </>
  )
}

export default Form