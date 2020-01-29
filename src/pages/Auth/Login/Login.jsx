import React from 'react'
import AbstractInput from 'components/forms/AbstractInput'
import AbstractForm from 'components/forms/AbstractForm'
import { Link } from 'react-router-dom'
import './login.scss'

import { Fade, Button } from '@material-ui/core'

function SignIn() {
  const initialValues = {
    email: '',
    password: '',
  }

  return (
    <section className="login">
      <div className="login__wrapper">
        <AbstractForm method="POST" pathname="/auth" initialValues={initialValues}>
          <Fade in={true} timeout={2000}>
            <>
              <img src="icon.svg" className="login__icon" alt="gastronomic evaluations"/>
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
                Entrar
              </Button>
              <Link to="/signup" className="login__link">Cadastre-se</Link>
            </>
          </Fade>
        </AbstractForm>
      </div>
    </section> 
  )
}

export default SignIn
