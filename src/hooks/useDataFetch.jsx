import {useState, useEffect} from 'react'

export default path => {
  const [ data, setData ] = useState([])
  const [ loaded, setLoaded ] = useState(false)
  const URL_API = process.env.REACT_APP_API_URL || 'http://localhost:5000'

  useEffect(() => {
    async function useFetch() {
      const response = await fetch(`${URL_API}${path}`)
      const data = await response.json()
  
      setData(data)
      setLoaded(true)
    }

    useFetch()
  }, [URL_API, path])

  return [
    data,
    setData,
    loaded
  ]
}