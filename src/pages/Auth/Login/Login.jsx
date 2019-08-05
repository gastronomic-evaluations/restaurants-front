import React from 'react'
import AbstractInput from 'components/forms/AbstractInput'
import ActionButton from 'components/ActionButton/ActionButton'
import { Send } from '@material-ui/icons'
import AbstractForm from 'components/forms/AbstractForm'
import {Link} from 'react-router-dom'
import './login.scss'

function SignIn() {
  const initialValues = {
    email: '',
    password: '',
  }

  return (
    <section className="login">
      <AbstractForm method="POST" pathname="/auth" initialValues={initialValues}>
        <AbstractInput name="email" label="email" />
        <AbstractInput name="password" label="password" type="password" />
        <Link to="/signup">Cadastre-se</Link>
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
