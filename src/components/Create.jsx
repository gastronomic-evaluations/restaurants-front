import React from 'react'
import { Field } from 'formik'

import AbstractForm from './AbstractForm'
// import { FormikContext } from '../contexts/contexts'
import '../App.scss'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <AbstractForm method="POST" initialValues={{title: '', rating: ''}}>
          <Field name="title" placeholder="title" />
          <Field name="rating" placeholder="rating" />
          <button type="submit">Enviar</button>
        </AbstractForm>
      </header>
    </div>
  )
}

export default Home