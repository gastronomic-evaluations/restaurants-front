import {useState, useEffect} from 'react'
import {get} from '../services/restaurantService'

export default path => {
  const [ data, setData ] = useState([])
  const [ loaded, setLoaded ] = useState(false)
  
  useEffect(() => {
    let mounted = true
    
    async function useFetch() {
      const data = await get(path)

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