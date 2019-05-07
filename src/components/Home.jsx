import React from 'react'
import { Link } from 'react-router-dom'
import '../App.scss'
import useFetch from '../hooks/useDataFetch'

function Home() {
  const [data, loaded] = useFetch('/restaurants')
  
  return loaded && (
    <div className="App">
      <header className="App-header">
        {
          data.map(({ _id, title, rating }) => (
            <div key={_id}>
              <h2>{title}</h2>
              <span>rating: {rating}</span>
            </div>
          ))
        }

        <Link to="/create">Create</Link>
      </header>
    </div>
  )
}

export default Home