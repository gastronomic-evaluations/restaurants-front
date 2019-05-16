import React, { useContext } from 'react'
import { string } from 'prop-types'
import { Field } from 'formik'
import { Switch, FormControlLabel } from '@material-ui/core'

import { FormikContext } from '../../contexts/contexts'

const AbstractRadio = ({ name, label }) => {
  const {values} = useContext(FormikContext)

  const getValue = (name, values) => {
    const index = name.indexOf('.')

    const firstProp = name.substring(0, index)
    const lastProps = name.substring(index + 1)

    return values[firstProp][lastProps]
  }

  const checked = name.includes('.')
    ? getValue(name, values)
    : values.name

  return (
    <FormControlLabel
      control={
        <Field name={name} render={({ field }) => (
          <Switch color="primary" value={name} checked={checked}  {...field}/>
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