import React from 'react'

import AbstractForm from './forms/AbstractForm'

function Home() {
  const initialValues = {
    title: '',
    date: '',
    knowFor: '',
    ocasion: '',
    observations: '',
    waitTime: '',
    address: '',
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
      goodForCouples: false,
      airConditioning: false,
      acceptReserve: false,
      acceptCards: false,
      goodDrinks: false,
      openLate: false,
      outdoorTables: false,
      parking: false
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