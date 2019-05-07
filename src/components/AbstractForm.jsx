import React, { useContext } from 'react'
import {Formik, Form } from 'formik'

import { FormikContext, RouteContext } from '../contexts/contexts'

const AbstractForm = ({ method, children, initialValues }) => {
  const { history } = useContext(RouteContext)

  const onSubmit = async (values, { setSubmitting }) => {
    history.goBack()
    console.log(JSON.stringify(values, null, 2))
    const response = await fetch(`${process.env.REACT_APP_API_URL}/restaurants`, {
      method,
      body: JSON.stringify(values, null, 2)
    })

    const data = await response.json()

    console.log(data)

    setSubmitting(false)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => (
        <Form>
          <FormikContext.Provider value={formikProps}>
            { children }
          </FormikContext.Provider>
        </Form>
      )}
    </Formik>
  )

}

export default AbstractForm