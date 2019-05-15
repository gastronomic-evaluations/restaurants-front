import React from 'react'
import DoneIcon from '@material-ui/icons/Done'
import Chip from '@material-ui/core/Chip'
import { bool, string } from 'prop-types'

const Convenience = ({check, label}) => (
  <>
    {
      check && (
        <Chip
          label={label}
          color="primary"
          deleteIcon={<DoneIcon />}
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