import React from 'react'
import Divider from '@material-ui/core/Divider'

import Chip from './Chip'

function Convenience({ data }) {
  const { 
    wifi, 
    music, 
    goodForCouples, 
    goodForGroups, 
    funny,
    goodWines,
    airConditioning,
    acceptReserve,
    acceptCards,
    goodDrinks,
    openLate,
    outdoorTables,
    parking
  } = data.convenience

  return (
    <>
      <Divider className="divider" />

      <Chip check={wifi} label="Wi-fi" />
      <Chip check={music} label="Música" />
      <Chip check={goodForCouples} label="Bom para casais" />
      <Chip check={goodForGroups} label="Bom para grupos" />
      <Chip check={goodWines} label="Bons vinhos" />
      <Chip check={funny} label="Divertido" />
      <Chip check={airConditioning} label="Ar-condicionado" />
      <Chip check={acceptReserve} label="Reservas" />
      <Chip check={acceptCards} label="Aceita Cartões" />
      <Chip check={goodDrinks} label="Drinks" />
      <Chip check={openLate} label="Aberto até tarde" />
      <Chip check={outdoorTables} label="Ar livre" />
      <Chip check={parking} label="Estacionamento" />
    </>
  )
}

export default Convenience