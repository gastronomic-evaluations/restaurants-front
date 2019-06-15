import React from 'react'

import AbstractForm from 'components/forms/AbstractForm'
import './create.scss'

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
    <div className="create">
      <AbstractForm method="POST" pathname="/restaurants" initialValues={initialValues} />
    </div>
  )
}

export default Home