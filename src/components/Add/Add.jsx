import React from 'react'
import { Link } from 'react-router-dom'
import './add.scss'

function Add({ path }) {
  return (
    <Link
      to={path}
      className="add"
    />
  )
}

export default Add