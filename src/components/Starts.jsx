import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'
import { number, any } from 'prop-types'

const Stars = ({check, amount}) => (
  <>
    {
      check && Array(Math.floor(amount))
        .fill()
        .map((current, index) => (
          <StarRateIcon key={index} style={{color: '#fdbd39'}}/>
        ))
    }
  </>
)

Stars.propTypes = {
  check: any,
  amount: number.isRequired
}

export default Stars