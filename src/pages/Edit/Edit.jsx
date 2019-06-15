import React, { useContext } from 'react'

import AbstractForm from 'components/forms/AbstractForm'
import useFetch from 'hooks/useDataFetch'
import {RouteContext} from 'contexts/contexts'
import './edit.scss'

function Edit() {
  const {match} = useContext(RouteContext)
  const {data, loaded} = useFetch(`/restaurants/${match.params.id}`)

  return loaded && (
    <div className="edit">
      <AbstractForm
        method="PUT"
        pathname={`/restaurants/${match.params.id}`}
        initialValues={data}
      />
    </div>
  )
}

export default Edit