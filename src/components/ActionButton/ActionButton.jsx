import React from 'react'
import './actionButton.scss'

function ActionButton({ path, children }) {
  return (
    <div className="action-button">
      { children }
    </div>
  )
}

export default ActionButton