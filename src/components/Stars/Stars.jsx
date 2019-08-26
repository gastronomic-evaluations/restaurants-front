import React from 'react'
import { StarRate } from '@material-ui/icons'
import { number } from 'prop-types'
import './stars.scss'

const Stars = ({amount}) => (
  <>
    {
      Array(Math.floor(amount))
        .fill()
        .map((current, index) => (
          <StarRate key={index} className="starRate__item" />
        ))
    }
  </>
)

Stars.propTypes = {
  amount: number.isRequired
}

export default Stars