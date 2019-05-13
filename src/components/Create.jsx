import React from 'react'

import AbstractForm from './AbstractForm'

function Home() {
  const initialValues = {
    title: '',
    rating: '',
    knowFor: '',
    ocasion: '',
    observations: '',
    waitTime: '',
    date: '',
    ratings: {
      service: undefined,
      environment: undefined,
      food: undefined,
      price: undefined
    },
    address: {
      street: '',
      number: undefined,
      zipcode: '',
      city: '',
      state: '',
      country: ''
    },
    recomendations: {
      askNext: '',
      neverAsk: '',
      worth: undefined
    }
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