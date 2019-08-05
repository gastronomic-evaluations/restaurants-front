import React from 'react'
import Route from './routes/Route'
import './App.scss'
import Navitation from 'components/Navigation'

function App(){
  return (
    <main className="main">
      <Route />
      <Navitation />
    </main>
  )
}

export default App