import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './App.css'
import { increment, decrement } from '../actions/counterActions'
import { loggedIn } from '../actions/isLoggedInAction'

function App () {
  const counter = useSelector((state) => state.count)
  const isLoggedIn = useSelector((state) => state.loggedIn)
  console.log('counter', counter)
  console.log('isLoggedIn', isLoggedIn)

  // using dispatch to call our action creators
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <div>
        <h1>Our App</h1>
        <p>Counter: {counter}</p>
        <button
          className='ui green button'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button className='ui red button' onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div>
        {!isLoggedIn ? (
          <button
            style={{ marginTop: '15px' }}
            className='ui inverted blue button'
            onClick={() => dispatch(loggedIn())}
          >
            Login: {isLoggedIn}
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default App
