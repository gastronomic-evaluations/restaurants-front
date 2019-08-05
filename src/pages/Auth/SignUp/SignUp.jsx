import React from 'react'
import AbstractInput from 'components/forms/AbstractInput'
import ActionButton from 'components/ActionButton/ActionButton'
import { Send } from '@material-ui/icons'
import AbstractForm from 'components/forms/AbstractForm'
import './signup.scss'

function SignIn() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  }

  return (
    <section className="signup">
      <AbstractForm method="POST" pathname="/signin" initialValues={initialValues}>
        <AbstractInput name="name" label="Nome" />
        <AbstractInput name="email" label="email" />
        <AbstractInput name="password" label="password" type="password" />

        <ActionButton>
          <button type="submit" data-test="save">
            <Send />
          </button>
        </ActionButton>
      </AbstractForm>
    </section>
  )
}

export default SignIn
