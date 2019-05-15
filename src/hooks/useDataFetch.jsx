import {useState, useEffect} from 'react'

export default path => {
  const [ data, setData ] = useState([])
  const [ loaded, setLoaded ] = useState(false)
  
  useEffect(() => {
    let mounted = true
    
    async function useFetch() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`)
      const data = await response.json()

      if(mounted) { setData(data) }
      setLoaded(true)
    }

    useFetch()

    return function cleanup() {
      mounted = false
    }
  }, [path])

  return {
    data,
    setData,
    loaded
  }
}