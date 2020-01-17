import React from 'react'
import './actionButton.scss'
import { Slide } from '@material-ui/core'

function ActionButton({ path, children }) {
  return (
    <Slide direction="up" in={true} timeout={2000}>
      <div className="action-button">
        { children }
      </div>
    </Slide>
  )
}

export default ActionButton