const publish = async ({ pathname, values, method }) => {
  const options = {
    method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(values, null, 2)
  }

  const URL = `${process.env.REACT_APP_API_URL}${pathname}`
  const response = await fetch(URL, options)
  const data = await response.json()
  return data
}

const exclude = async ({id, history}) => {
  const options = { method: 'DELETE' }
  const URL = `${process.env.REACT_APP_API_URL}/restaurants/${id}`
  const response = await fetch(URL, options)
  history.goBack()
  return response
}

export {
  publish,
  exclude
}