import React from 'react'

import AbstractForm from 'components/forms/AbstractForm'
import Form from '../Form'

import './create.scss'

function Create() {
  const initialValues = {
    name: ''
  }


  return (
    <div className="create">
      <AbstractForm method="POST" pathname="/wishlist" initialValues={initialValues}>
        <Form />
      </AbstractForm>
    </div>
  )
}

export default Create