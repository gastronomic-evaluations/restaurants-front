import React, {useContext} from 'react'
import { Field, ErrorMessage } from 'formik'
import { TextField } from '@material-ui/core'
import { string } from 'prop-types'

import { FormikContext } from 'contexts/contexts'
import inputHasErrors from './InputHasErrors'

const Input = ({ name, label, fullWidth, multiline, rows }) => {
  const { errors, touched } = useContext(FormikContext)

  return (
    <>
      <Field name={name} render={({ field }) => (
        <TextField
          error={inputHasErrors({errors, touched, name })}
          label={label}
          className="field"
          fullWidth={fullWidth}
          multiline={multiline}
          rows={rows}
          inputProps={{...field}}
        />
      )} />

      <ErrorMessage name={name}>
        { msg => <div className="field--error">{msg}</div> }
      </ErrorMessage>
    </>
  )
}

Input.defaultProps = {
  multiline: false,
  rows: 1,
  fullWidth: true
}

Input.propTypes = {
  name: string.isRequired,
  label: string.isRequired
}

export default Input