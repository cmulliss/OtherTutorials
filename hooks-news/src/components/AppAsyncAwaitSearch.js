import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import './App.css'

// we want to add a search, so create state
const App = () => {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('react hooks')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // calling useRef, we get back an object. Our ref is being instantiated in the searchInputRef variable, which is then used on our input by being set as the ref input.
  const searchInputRef = useRef()

  useEffect(() => {
    getResults()
  }, [])
  // use template literals for our endpoint and dynamically inser the value we have stored in state for query for the query parameter.
  const getResults = async () => {
    setLoading(true)

    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      )
      setResults(response.data.hits)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }
  // how to get input, first use setQuery. A change event will be fired and pass the typed in value to setQuery.
  // use a button so search not submitted until clicked.
  // wrap button and input in a form so can use 'enter' to search too, and change button type to 'submit'. Then instead of onClick on button, add onSubmit to form.

  const handleSearch = (event) => {
    event.preventDefault()
    getResults()
  }

  // clear the search input, and also focus the input box.
  const handleClearSearch = () => {
    setQuery('')
    searchInputRef.current.focus()
  }

  return (
    <div className='container max-w-md mx-auto px-4 mx-2 bg-purple-200 shadow-lg rounded'>
      <img
        src='https://icon.now.sh/react/c0c'
        alt='React Logo'
        className='float-right h-12'
      />

      <h1 className='text-black text-lg font-thin'>Hooks News</h1>
      <form className='mb-2' onSubmit={handleSearch}>
        <input
          className='border p-1 rounded'
          type='text'
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          ref={searchInputRef}
        />
        <button className='bg-orange-500 rounded px-2 mx-2' type='submit'>
          Search
        </button>
        <button
          className='bg-teal-500 text-white px-2 mx-2 rounded'
          type='button'
          onClick={handleClearSearch}
        >
          Clear
        </button>
      </form>
      {loading ? (
        <div>Loading results...</div>
      ) : (
        <ol>
          <h1>Hooks News</h1>
          {results.map((result) => (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </ol>
      )}
      {error && <div>{error.message}</div>}
    </div>
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

// could use a throtttle or debounce fn, but using a button instead.
// curently only running effect fn, so the getResults fn runs on on component mount and unmount, due to empty array. If want our effect fn to be called based on a certain value changing, pass it into the [query] as a dependency, tn this case query. so, every time our state is being updated, in particular the query value being updated, we are calling getResults.

// style={{ margin: 20, border: '1px solid black' }}
