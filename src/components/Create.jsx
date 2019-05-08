import React from 'react'
import { Field } from 'formik'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


import AbstractForm from './AbstractForm'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <AbstractForm method="POST" initialValues={{title: '', rating: ''}}>
          <Field name="title" render={({ field }) => (
            <Input
              className="input"
              placeholder="Nomedo restaurante"
              inputProps={{...field}}
            />
          )} />
          <Field name="rating" render={({ field }) => (
            <Input
              className="input"
              placeholder="Nota"
              inputProps={{...field}}
            />
          )} />
          <Button className="send" type="submit" variant="contained" color="primary" >
            <AddIcon />
          </Button>
        </AbstractForm>
      </header>
    </div>
  )
}

export default Home