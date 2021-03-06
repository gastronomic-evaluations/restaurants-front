import React from 'react'
import { Place } from '@material-ui/icons'
import { Divider, Typography } from '@material-ui/core'

function MoreInfo({ data }) {
  const { waitTime, ocasion, knowFor, address, recomendations } = data
  const { askNext, neverAsk, worth } = recomendations

  const style = {
    panel: {width: '90%', margin: '0 5%'},
    ty: {width: '100%'},
    r: {marginBottom: '10px', display: 'block'},
    line: {display: 'block'}
  }

  return (
    <>
      <Divider className="divider" />
      <Typography component="div" style={style.ty}>
        { waitTime && <span style={style.line}><b>Tempo de espera:</b> {waitTime}</span> }
        { ocasion && <span style={style.line}><b>Ocasião:</b> {ocasion}</span> }
        { knowFor && <span style={style.line}><b>Conhecido por:</b> {knowFor}</span> }
        { address && <span style={style.line}><b>Endereço:</b> {address} <a className="primary-color" target="_blank" rel="noopener noreferrer" href={`https://maps.google.com/?q=${address}`}><Place /></a></span> }

        <Divider className="divider" />

        <b style={style.r}>Recomendações</b>
        { askNext && <span style={style.line}><b>Pedir nas próximas:</b> {askNext}</span> }
        { neverAsk && <span style={style.line}><b>Nunca pedir:</b> {neverAsk}</span> }
        { recomendations.hasOwnProperty('worth') && <span style={style.line}><b>Vale a pena:</b> {worth ? 'Sim' : 'Não'}</span> }
      </Typography>
    </>
  )
}

export default MoreInfo