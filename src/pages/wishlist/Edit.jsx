import React, { useContext } from 'react'

import AbstractForm from 'components/forms/AbstractForm'
import useFetch from 'hooks/useDataFetch'
import {RouteContext} from 'contexts/contexts'
import Form  from 'pages/wishlist/Form'
import Container from 'components/Container'

function Edit() {
  const {match} = useContext(RouteContext)
  const {data, loaded} = useFetch(`/wishlist/${match.params.id}`)

  return loaded && (
    <Container>
      <AbstractForm
        method="PUT"
        pathname={`/wishlist/${match.params.id}`}
        initialValues={data}
      >
        <Form />
      </AbstractForm>
    </Container>
  )
}

export default Edit