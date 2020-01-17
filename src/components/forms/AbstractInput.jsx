import React, {useContext} from 'react'
import { Field, ErrorMessage } from 'formik'
import { TextField } from '@material-ui/core'
import { string } from 'prop-types'

import { FormikContext } from 'contexts/contexts'
import inputHasErrors from './InputHasErrors'

const AbstractInput = ({ name, label, fullWidth, multiline, rows, type }) => {
  const { errors, touched } = useContext(FormikContext)

  return (
    <>
      <Field name={name}>
      {({ field }) => (
        <TextField
          error={inputHasErrors({errors, touched, name })}
          label={label}
          className="field"
          fullWidth={fullWidth}
          multiline={multiline}
          rows={rows}
          type={type}
          variant="outlined"
          inputProps={{
            'data-test': name,
            ...field
          }}
        />
      )}
      </Field>

      <ErrorMessage name={name}>
        { msg => <div data-test={`${name}-error`} className="field--error">{msg}</div> }
      </ErrorMessage>
    </>
  )
}

AbstractInput.defaultProps = {
  multiline: false,
  rows: 1,
  fullWidth: true,
  type: 'text',
}

AbstractInput.propTypes = {
  name: string.isRequired,
  label: string.isRequired
}

export default AbstractInput