import React from 'react'

import AbstractForm from './AbstractForm'

function Home() {
  const initialValues = {
    title: '',
    rating: '',
    knowFor:  '',
    fame: '',
    ocasion: ''
  }

  return (
    <div className="App">
      <header className="App-header">
        <AbstractForm method="POST" pathname="/restaurants" initialValues={initialValues} />
      </header>
    </div>
  )
}

export default Home