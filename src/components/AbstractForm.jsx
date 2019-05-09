import React, { useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { RouteContext } from '../contexts/contexts'

const AbstractForm = ({ method, initialValues, pathname }) => {
  const { history } = useContext(RouteContext)

  const onSubmit = async (values, { setSubmitting }) => {
    
    const response = await fetch(`${process.env.REACT_APP_API_URL}${pathname}`, {
      method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values, null, 2)
    })

    const data = await response.json()

    console.log(data)
    history.goBack()
    setSubmitting(false)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field name="title" render={({ field }) => (
          <Input
            className="input"
            placeholder="Nome do restaurante"
            inputProps={{...field}}
          />
        )} />
        <Field name="rating" render={({ field }) => (
          <Input
            className="input"
            placeholder="Nota"
            inputProps={{...field}}
          />
        )} />
        <Button className="send" type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </Form>
    </Formik>
  )
}

export default AbstractForm