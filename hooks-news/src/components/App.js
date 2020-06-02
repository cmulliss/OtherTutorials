import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

const App = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    axios
      .get('https://hn.algolia.com/api/v1/search?query=reacthooks')
      .then((response) => {
        console.log('response.data', response.data)
        setResults(response.data.hits)
      })
  }, [])
  // above, passing in an empty [] to avoid endless loop. Ensures that the contents of the effect fn only runs on component mounted and NOT on any updates.
  return (
    <>
      <ol>
        <h1>Hooks News</h1>
        {results.map((result) => (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ol>
    </>
  )
}

export default App

// pass in endpoint for hacker api
// base api: 'http://hn.algolia.com/api/vi'
// need endpoint, serch and include a query param:
// search?query=reacthooks

//     return (cleanUp = () => {})
//   }, [])
