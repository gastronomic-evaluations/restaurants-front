import React, { useContext } from 'react'
import { Formik, Form } from 'formik'

import { RouteContext, FormikContext } from '../../contexts/contexts'
import { publish } from '../../services/restaurantService'

const AbstractForm = ({ method, initialValues, pathname, children }) => {
  const { history } = useContext(RouteContext)

  const onSubmit = async (values, { setSubmitting }) => {
    await publish({ method, values, pathname })

    history.goBack()
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