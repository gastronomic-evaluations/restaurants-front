import React from 'react'
import {Button} from '@material-ui/core'

import AbstractInput from 'components/forms/AbstractInput'

function Form() {
  return (
    <>
      <AbstractInput name="name" label="Nome do restaurante" />

      <Button data-test="save" className="send" type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </>
  )
}

export default Form