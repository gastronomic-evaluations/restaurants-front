import React from 'react'

import AbstractForm from 'components/forms/AbstractForm'
import Form from './Form'
import Container from 'components/Container'

function Create() {
  const initialValues = {
    name: ''
  }


  return (
    <Container>
      <AbstractForm method="POST" pathname="/wishlist" initialValues={initialValues}>
        <Form />
      </AbstractForm>
      </Container>
  )
}

export default Create