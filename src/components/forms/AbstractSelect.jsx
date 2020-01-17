import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Field } from 'formik'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { string, array } from 'prop-types'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const AbstractSelect = ({ name, label, options }) => {
  const classes = useStyles()
  const [value, setValue] = useState(3)

  return (
    <Field name={name}>
      {({ field }) => (
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id={name}>{label}</InputLabel>
          <Select
            labelId={name}
            id={name}
            value={value}
            onChange={({ target }) => setValue(target.value)}
            inputProps={{
              'data-test': name,
              ...field
            }}
          >
            {
              options.map(({ label, value }) => {
                return <MenuItem key={value} value={value}>{label}</MenuItem>
              })
            }
          </Select>
        </FormControl>
      )}
    </Field>
  )
}

AbstractSelect.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  options: array.isRequired
}

export default AbstractSelect