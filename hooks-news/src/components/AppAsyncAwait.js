import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

const App = () => {
  const [results, setResults] = useState([])
  useEffect(() => {
    getResults()
  }, [])

  const getResults = async () => {
    const response = await axios.get(
      'http://hn.algolia.com/api/v1/search?query=reacthooks'
    )
    setResults(response.data.hits)
  }

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

//  console.log('response.data.hits', respose.data.hits)

// warning: useEffect fn must return a cleanup fn or nothing. Promised and useEffect(async () => ...) are not supported, but you can call an async fn inside an effect.
// so, async fns, for the effect fn, are not supported. Every fn we write prefixed with prefix with async returns a PROMISE implicitly, and as the warning says, useEffect must return a cleanup fn or nothing.
// so could return:
// return () => {}
// however, we can fix this warning by simply creating a separate async await fn and calling it within the effect fn.
