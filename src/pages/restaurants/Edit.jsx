import React, { useContext } from 'react'

import AbstractForm from 'components/forms/AbstractForm'
import useFetch from 'hooks/useDataFetch'
import {RouteContext} from 'contexts/contexts'
import Form from 'pages/restaurants/Form'
import Container from 'components/Container'

function Edit() {
  const {match} = useContext(RouteContext)
  const {data, loaded} = useFetch(`/restaurants/${match.params.id}`)

  return loaded && (
    <Container centered>
      <AbstractForm
        method="PUT"
        pathname={`/restaurants/${match.params.id}`}
        initialValues={data}
      >
        <Form />
      </AbstractForm>
    </Container>
  )
}

export default Edit