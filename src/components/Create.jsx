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
    address: '',
    date: '',
    ratings: {
      service: '',
      environment: '',
      food: '',
      price: ''
    },
    recomendations: {
      askNext: '',
      neverAsk: '',
      worth: false
    },
    convenience: {
      wifi: false,
      goodWines: false,
      music: false,
      goodForGroups: false,
      funny: false,
      goodForCouples: false
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