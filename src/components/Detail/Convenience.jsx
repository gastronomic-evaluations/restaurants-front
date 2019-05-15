import React from 'react'
import Divider from '@material-ui/core/Divider'

import Chip from './Chip'

function Convenience({ data }) {
  const { wifi, music, goodForCouples, goodForGroups, funny, goodWines } = data.convenience

  return (
    <>
      <Divider className="divider" />

      <Chip check={wifi} label="Wi-fi" />
      <Chip check={music} label="Música" />
      <Chip check={goodForCouples} label="Bom para casais" />
      <Chip check={goodForGroups} label="Bom para grupos" />
      <Chip check={goodWines} label="Bons vinhos" />
      <Chip check={funny} label="Divertido" />
    </>
  )
}

export default Convenience