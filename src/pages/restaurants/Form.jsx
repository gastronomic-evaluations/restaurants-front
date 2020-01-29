import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Typography, Divider} from '@material-ui/core'
import ActionButton from  'components/ActionButton/ActionButton'
import AbstractInput from 'components/forms/AbstractInput'
import AbstractSelect from 'components/forms/AbstractSelect'
import AbstractRadio from 'components/forms/AbstractRadio'
import { Send } from '@material-ui/icons'
import { ratingsOptions } from 'lib/constants'

const useStyles = makeStyles(theme => ({
  ratingsGrid: {
    display: 'grid',
    gridTemplateColumns: `repeat(${2}, 2fr)`,
    gridGap: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(10),
  }
}));

function Form() {
  const { ratingsGrid, title } = useStyles();

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

      <Typography gutterBottom variant="h6" component="h5" className={title}>
        Notas
      </Typography>
      <div className={ratingsGrid}>
        <AbstractSelect name="ratings.service" label="Serviço" options={ratingsOptions} />
        <AbstractSelect name="ratings.environment" label="Lugar" options={ratingsOptions} />
        <AbstractSelect name="ratings.price" label="Preço" options={ratingsOptions} />
        <AbstractSelect name="ratings.food" label="Comida" options={ratingsOptions} />
      </div>

      <Typography gutterBottom variant="h6" component="h5" className={title}>
        Recomendações
      </Typography>

      <AbstractInput name="recomendations.askNext" label="Pedir nas próximas" />
      <AbstractInput name="recomendations.neverAsk" label="Nunca pedir" />
      <AbstractRadio name="recomendations.worth" label="Vale a pena?" />

      <Typography gutterBottom variant="h6" component="h5" className={title}>
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

      <ActionButton>
        <button type="submit" data-test="save">
          <Send fontSize="small" />
        </button>
      </ActionButton>
      
    </>
  )
}

export default Form