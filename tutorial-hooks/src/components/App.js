import React, { useState } from 'react'

const AppHooks = () => {
  const [count, setCount] = useState(0)
  useState

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <h1>AppHooks</h1>
      <h2>Counter</h2>
      <button onClick={incrementCount}>I was clicked {count} times</button>

      <h2>Toggle Light</h2>
      <div
        style={{
          height: 50,
          width: 50,
          margin: 30,
          background: this.state.isOn ? 'yellow' : 'grey',
        }}
        onClick={this.state.toggleLight}
      />
    </>
  )
}

export default AppHooks

/*
how do we get state?
We just use it!
our first hook is called useState, is a fn,so import it.
can hook in the ability to work with state.
from the fn call we get a couple of things, and we need to initialise both, using const.
First is the value in state that we want to create, and the second is the ability to set state, but latter not a general method, this is a setState fn SPECIFICALLY for the state value we created.

How do we ensure that we're always using the correct value of count within every set or a function that's returned from state?
We also have access to an updator function.
However, once again, since this state doesn't manage an entire state object but only the count part of state that we've chosen to create, we only get the updater function to setCount the previous count value.
Once again we'll write it as an arrow function.
It doesn't need to return an object it just needs to return previous count +1
 setCount(prevCount => prevCount + 1)
 Now should always be incremented correctly, ie, based on it's previous value.
With classes, state is always an object, but with useState it doesn't have to be, it can be ANY js type.
*/
