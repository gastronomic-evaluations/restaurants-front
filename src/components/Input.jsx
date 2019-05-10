import React from 'react'
import {Field} from 'formik'
import TextField from '@material-ui/core/TextField'

const Input = ({ name, label }) => {
  return (
    <Field name={name} render={({ field }) => (
      <TextField
        label={label}
        className="input"
        fullWidth
        inputProps={{...field}}
      />
    )} />
  )
}

export default Input