import React from 'react'
import { StarRate } from '@material-ui/icons'
import { number, any } from 'prop-types'

const Stars = ({check, amount}) => (
  <>
    {
      check && Array(Math.floor(amount))
        .fill()
        .map((current, index) => (
          <StarRate key={index} style={{color: '#fdbd39'}}/>
        ))
    }
  </>
)

Stars.propTypes = {
  check: any,
  amount: number.isRequired
}

export default Stars