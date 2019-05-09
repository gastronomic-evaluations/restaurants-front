import React from 'react'

import AbstractForm from './AbstractForm'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <AbstractForm method="POST" pathname="/restaurants" initialValues={{title: '', rating: ''}} />
      </header>
    </div>
  )
}

export default Home