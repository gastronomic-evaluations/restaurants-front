import React from 'react'
import {Field} from 'formik'
import TextField from '@material-ui/core/TextField'
import { string } from 'prop-types'

const Input = ({ name, label, multiline, rows }) => {
  return (
    <Field name={name} render={({ field }) => (
      <TextField
        label={label}
        className="input"
        fullWidth
        multiline={multiline}
        rows={rows}
        inputProps={{...field}}
      />
    )} />
  )
}

Input.defaultProps = {
  multiline: false,
  rows: 1
}

Input.propTypes = {
  name: string.isRequired,
  label: string.isRequired
}

export default Input