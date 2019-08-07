import { getToken } from './auth'

const { REACT_APP_API_URL } = process.env

function requestOptions(options = {}) {
  return {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${getToken()}`,
    },
  }
}

const publish = async ({ pathname, values, method }) => {
  const options = {
    method,
    body: JSON.stringify(values, null, 2)
  }

  const URL = `${REACT_APP_API_URL}${pathname}`
  const response = await fetch(URL, requestOptions(options))
  const data = await response.json()
  return data
}

const get = async (path) => {
  const response = await fetch(`${REACT_APP_API_URL}${path}`, requestOptions())
  const data = await response.json()
  return data
}

const exclude = async ({ id, path, list = [], setData = () => {} }) => {
  const URL = `${REACT_APP_API_URL}${path}/${id}`
  const response = await fetch(URL, requestOptions({ method: 'DELETE' }))

  const data = list.filter(({ _id }) => _id !== id)
  setData(data)

  return response
}

export {
  publish,
  exclude,
  get
}