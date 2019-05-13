import React from 'react'
import { string } from 'prop-types'
import { Field } from 'formik'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const AbstractRadio = ({ name, label }) => {
  return (
    <FormControlLabel
      control={
        <Field name={name} render={({ field }) => (
          <Switch value={name} color="primary" {...field}/>
        )} />
      }
      label={label}
    />
  )
}

AbstractRadio.propTypes = {
  name: string.isRequired,
  label: string.isRequired
}

export default AbstractRadio