import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button'
import Input from './Input'

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
        <Input name="title" label="Nome do restaurante" />
        <Input name="rating" label="Nota" />
        <Input name="knowFor" label="Conhecido por" />
        <Input name="fame" label="Fama" />
        <Input name="ocasion" label="Ocasião" />

        <Button className="send" type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </Form>
    </Formik>
  )
}

export default AbstractForm