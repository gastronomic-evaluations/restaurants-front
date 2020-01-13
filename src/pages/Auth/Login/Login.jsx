import React from 'react'
import AbstractInput from 'components/forms/AbstractInput'
import ActionButton from 'components/ActionButton/ActionButton'
import { Send } from '@material-ui/icons'
import AbstractForm from 'components/forms/AbstractForm'
import { Link } from 'react-router-dom'
import './login.scss'

function SignIn() {
  const initialValues = {
    email: '',
    password: '',
  }

  return (
    <section className="login">
      <div className="login__wrapper">
        <AbstractForm method="POST" pathname="/auth" initialValues={initialValues}>
          <img src="icon.svg" className="login__icon" alt="gastronomic evaluations"/>
          <AbstractInput name="email" label="email" />
          <AbstractInput name="password" label="senha" type="password" />

          <Link to="/signup" className="login__link">Cadastre-se</Link>

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
