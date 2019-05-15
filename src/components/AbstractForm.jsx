import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import Input from './Input'
import AbstractRadio from './AbstractRadio'
import { RouteContext, FormikContext } from '../contexts/contexts'
import { publish } from '../services/restaurantService'

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
            <Input name="title" label="Nome do restaurante" />
            <Input name="rating" label="Nota" />
            <Input name="knowFor" label="Conhecido por" />
            <Input name="ocasion" label="Ocasião" />
            <Input name="waitTime" label="Tempo de espera" />
            <Input name="address" label="Endereço" />
            <Input name="observations" label="Observações" multiline={true} rows={5} />

            <Typography gutterBottom variant="h6" component="h5" style={{marginTop:'100px'}}>
              Notas
            </Typography>
            <div style={{display: 'flex'}}>
              <Input name="ratings.service" label="Serviço" fullWidth={false} />
              <Input name="ratings.environment" label="Lugar" fullWidth={false} />
              <Input name="ratings.price" label="Preço" fullWidth={false} />
              <Input name="ratings.food" label="Comida" fullWidth={false} />
            </div>

            <Typography gutterBottom variant="h6" component="h5" style={{marginTop:'100px'}}>
              Recomendações
            </Typography>

            <Input name="recomendations.askNext" label="Pedir nas próximas" />
            <Input name="recomendations.neverAsk" label="Nunca pedir" />
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