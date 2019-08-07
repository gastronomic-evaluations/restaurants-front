import React, { useContext } from 'react'
import { Formik, Form } from 'formik'

import { RouteContext, FormikContext } from '../../contexts/contexts'
import { publish } from '../../services/abstractService'

const AbstractForm = ({ method, initialValues, pathname, children }) => {
  const { history } = useContext(RouteContext)

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    const response = await publish({ method, values, pathname })

    if (response.hasOwnProperty('errors')) {
      setErrors(response.errors)
    } else {
      if (pathname === '/signin' || pathname === '/auth') {
        window.localStorage.setItem('token', response.token)
        window.location = '/#/restaurants'
      } else {
        history.goBack()
      }
    }

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