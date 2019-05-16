import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import {Button, Typography, Divider} from '@material-ui/core'

import AbstractInput from './AbstractInput'
import AbstractRadio from './AbstractRadio'
import { RouteContext, FormikContext } from '../../contexts/contexts'
import { publish } from '../../services/restaurantService'

const AbstractForm = ({ method, initialValues, pathname }) => {
  const { history } = useContext(RouteContext)

  const onSubmit = (values, { setSubmitting }) => {
    const data = publish({method, values, pathname})
    console.log(data)
    
    history.goBack()
    setSubmitting(false)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => (
        <Form>
          <FormikContext.Provider value={formikProps}>
            <AbstractInput name="title" label="Nome do restaurante" />
            <AbstractInput name="knowFor" label="Conhecido por" />
            <AbstractInput name="ocasion" label="Ocasião" />
            <AbstractInput name="waitTime" label="Tempo de espera" />
            <AbstractInput name="address" label="Endereço" />
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

            <Divider />

            <Button className="send" type="submit" variant="contained" color="primary">
              Salvar
            </Button>
          </FormikContext.Provider>
        </Form>
      )}
    </Formik>
  )
}

export default AbstractForm