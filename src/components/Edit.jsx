import React, { useContext } from 'react'

import AbstractForm from './forms/AbstractForm'
import useFetch from '../hooks/useDataFetch'
import {RouteContext} from '../contexts/contexts'

function Edit() {
  const {match} = useContext(RouteContext)
  const {data, loaded} = useFetch(`/restaurants/${match.params.id}`)

  return loaded && (
    <div className="App">
      <header className="App-header">
        <AbstractForm
          method="PUT"
          pathname={`/restaurants/${match.params.id}`}
          initialValues={data}
        />
      </header>
    </div>
  )
}

export default Edit