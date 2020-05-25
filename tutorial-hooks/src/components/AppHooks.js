import React, { useState, useEffect } from 'react'

// create our isOn state, calling useState allows us to create a single piece of state, as a result we can call useState multiple times.
// Can call it imdeiately under our first execution of useState (NB: in classes state always an object, doesn't have to be with useState, can be any js type - boolean)
const AppHooks = () => {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const [status, setStatus] = useState(navigator.onLine)

  // by default useEffect is executed AFTER every render
  // using a side effect, then passing in a fn. This fn is our effect when we specify what we want to be done after each render.
  useEffect(() => {
    document.title = `You have clicked ${count} times`
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    // to 'unmount', ie cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [count])

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const toggleLight = () => {
    setIsOn((prevIsOn) => !prevIsOn)
  }

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    })
  }

  const handleOnline = () => {
    setStatus(true)
  }

  const handleOffline = () => {
    setStatus(false)
  }

  return (
    <>
      <h1>AppHooks</h1>
      <h2>Counter</h2>
      <button onClick={incrementCount}>I was clicked {count} times</button>

      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          height: 50,
          width: 50,
          margin: 30,
          background: isOn ? 'yellow' : 'grey',
        }}
        alt='torch'
        onClick={toggleLight}
      />
      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />
      <h2>Network Status</h2>
      <p>
        You are <strong>{status ? 'online' : 'offline'}</strong>{' '}
      </p>
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

to top hanging, add 2nd arg to useEffect
useEffect(() => {   },[])

*/
