import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({ results: [] })
  const [query, setQuery] = useState('')

  const searchCharacters = async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/?name=${query}`
      )
    setData(result.data)
  }

  useEffect(() => {
    searchCharacters()
  }, [query])




  
  return(
    <div>
      <form onSubmit={ e => e.preventDefault() } style={{ textAlign:'center' }}>
        <input 
          placeholder='Buscar personaje de Rick and Morty'
          value={query} 
          type='text' 
          onChange={e => setQuery(e.target.value)}
          style={{ 
            width:'400px', 
            height:'30px',
            margin:'10px 0',
            borderRadius:'5px',
            padding:'3px 5px',
            fontFamily: `'Baloo Chettan', cursive`,
            fontSize: '20px'
          }}
        />
      </form>
      <div className='results'>
        <ul style={{ 
            display:'flex',
            flexFlow:'row wrap',
            margin:'0',
            listStyleType: 'none'
        }}>
          {data.results.map( item => (
            <li 
              style={{ margin: '2px 2px 0 2px' }} 
              key={item.id}
            >
              <img 
                src={item.image} 
                alt={item.name} 
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
