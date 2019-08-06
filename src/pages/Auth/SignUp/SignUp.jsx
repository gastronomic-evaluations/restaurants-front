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
      <div className="signup__wrapper">
        <AbstractForm method="POST" pathname="/signin" initialValues={initialValues}>
          <img src="icon.svg" className="signup__icon" alt="gastronomic evaluations"/>

          <AbstractInput name="name" label="nome" />
          <AbstractInput name="email" label="email" />
          <AbstractInput name="password" label="senha" type="password" />

          <ActionButton>
            <button type="submit" data-test="save">
              <Send />
            </button>
          </ActionButton>
        </AbstractForm>
      </div>
    </section>
  )
}

export default SignIn
