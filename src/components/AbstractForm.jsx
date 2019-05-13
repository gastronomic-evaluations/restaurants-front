import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Input from './Input'
import AbstractRadio from './AbstractRadio'

import { RouteContext } from '../contexts/contexts'
import { publish } from '../services/restaurantService'

const AbstractForm = ({ method, initialValues, pathname }) => {
  const { history } = useContext(RouteContext)

  const onSubmit = (values, { setSubmitting }) => {
    // const data = publish({method, values, pathname})
    console.log(values)
    
    // history.goBack()
    setSubmitting(false)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Input name="title" label="Nome do restaurante" />
        <Input name="rating" label="Nota" />
        <Input name="knowFor" label="Conhecido por" />
        <Input name="ocasion" label="Ocasião" />
        <Input name="waitTime" label="Tempo de espera" />
        <Input name="observations" label="Observações" multiline={true} rows={5} />

        <Typography gutterBottom variant="h6" component="h5" style={{marginTop:'100px'}}>
          Endereço
        </Typography>

        <Input name="address.street" label="logradouro" />
        <Input name="address.number" label="Número" />
        <Input name="address.zipcode" label="CEP" />
        <Input name="address.city" label="Cidade" />
        <Input name="address.state" label="Estado" />
        <Input name="address.country" label="Pais" />

        <Typography gutterBottom variant="h6" component="h5" style={{marginTop:'100px'}}>
          Recomendações
        </Typography>

        <Input name="recomendations.askNext" label="Pedir nas próximas" />
        <Input name="recomendations.neverAsk" label="Nunca pedir" />
        <AbstractRadio name="recomendations.worth" label="Vale a pena?" />

        <Typography gutterBottom variant="h6" component="h5" style={{marginTop:'100px'}}>
          Notas
        </Typography>

        <Input name="ratings.service" label="Nota para o serviço" />
        <Input name="ratings.environment" label="Nota para o ambiente" />
        <Input name="ratings.price" label="Nota para o preço" />
        <Input name="ratings.food" label="Nota para a comida" />

        <Typography gutterBottom variant="h6" component="h5" style={{marginTop:'100px'}}>
          Conveniência
        </Typography>
        <AbstractRadio name="convenience.wifi" label="Wifi" />

        <Divider />

        <Button className="send" type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </Form>
    </Formik>
  )
}

export default AbstractForm