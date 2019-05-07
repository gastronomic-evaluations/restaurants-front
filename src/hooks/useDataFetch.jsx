import {useState, useEffect} from 'react'

export default path => {
  const [ data, setData ] = useState([])
  const [ loaded, setLoaded ] = useState(false)

  useEffect(() => {
    async function useFetch() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`)
      const data = await response.json()
  
      setData(data)
      setLoaded(true)
    }

    useFetch()
  }, [path])

  return [
    data,
    setData,
    loaded
  ]
}