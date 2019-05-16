import React from 'react'
import { Done } from '@material-ui/icons'
import { Chip } from '@material-ui/core'
import { bool, string } from 'prop-types'

const Convenience = ({check, label}) => (
  <>
    {
      check && (
        <Chip
          label={label}
          color="primary"
          deleteIcon={<Done />}
          style={{ margin: '0 2px 5px' }}
        />
      )
    }
  </>
)

Convenience.propTypes = {
  check: bool.isRequired,
  label: string.isRequired
}

export default Convenience