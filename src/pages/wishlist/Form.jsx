import React from 'react'
import ActionButton from 'components/ActionButton/ActionButton'
import { Send } from '@material-ui/icons'

import AbstractInput from 'components/forms/AbstractInput'

function Form() {
  return (
    <>
      <AbstractInput name="name" label="Nome do restaurante" />

      <ActionButton>
        <button type="submit" data-test="save">
          <Send />
        </button>
      </ActionButton>
    </>
  )
}

export default Form