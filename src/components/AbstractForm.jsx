import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button'
import Input from './Input'

import { RouteContext } from '../contexts/contexts'
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
      <Form>
        <Input name="title" label="Nome do restaurante" />
        <Input name="rating" label="Nota" />
        <Input name="knowFor" label="Conhecido por" />
        <Input name="fame" label="Fama" />
        <Input name="ocasion" label="Ocasião" />
        <Input name="observations" label="Observações" multiline={true} rows={5} />

        <Button className="send" type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </Form>
    </Formik>
  )
}

export default AbstractForm