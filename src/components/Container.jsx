import React from 'react'

const Container = ({ children, centered }) => {
  return (
    <div style={{
      padding: '20px 5% 80px',
      height: '100%',
      textAlign: centered ? 'center' : 'left'
    }}>{ children }</div>
  )
}

export default Container