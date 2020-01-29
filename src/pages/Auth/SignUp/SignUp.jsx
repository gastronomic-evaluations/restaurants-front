import React from 'react'
import AbstractInput from 'components/forms/AbstractInput'
import { Save } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
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
          <Button
            variant="contained"
            color="primary"
            className="login__submit"
            data-test="save"
            type="submit"
            size="large"
            fullWidth
          >
            Cadastre-se
          </Button>
          <Link to="/login" className="login__link">Voltar para o login</Link>
        </AbstractForm>
      </div>
    </section>
  )
}

export default SignIn
