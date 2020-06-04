import React, { useContext, useReducer } from 'react'

import './App.css'

const initialState = {
  count: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      }
    case 'decrement':
      return {
        count: state.count - 1,
      }
    case 'reset':
      return initialState

    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='container'>
      <h1>App</h1>
      Count: {state.count}
      <button
        style={{ margin: 10 }}
        className='ui button blue'
        onClick={() => dispatch({ type: 'increment' })}
      >
        Increment
      </button>
      <button
        className='ui button green'
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Decrement
      </button>
      <button
        className='ui button red'
        onClick={() => dispatch({ type: 'reset' })}
      >
        Reset
      </button>
    </div>
  )
}

export default App

// react context solves props drilling issue
