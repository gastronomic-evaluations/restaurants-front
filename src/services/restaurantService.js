const { REACT_APP_API_URL } = process.env

const publish = async ({ pathname, values, method }) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${window.localStorage.getItem('token')}`,
    },
    body: JSON.stringify(values, null, 2)
  }

  const URL = `${REACT_APP_API_URL}${pathname}`
  const response = await fetch(URL, options)
  const data = await response.json()
  return data
}

const get = async (path) => {
  const response = await fetch(`${REACT_APP_API_URL}${path}`, {
    headers: {
      authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  })
  const data = await response.json()
  return data
}

const exclude = async ({ id, history }) => {
  const options = {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  }

  const URL = `${REACT_APP_API_URL}/restaurants/${id}`
  const response = await fetch(URL, options)
  history.goBack()
  return response
}

export {
  publish,
  exclude,
  get
}