import React, { useState } from 'react'

const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  // would normally make a request to an api, but instead
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const userData = {
      username,
      password
    }
    // will just display the userData on the page
    // then clear inputs, are controlled components
    setUser(userData)
    setUserName('')
    setPassword('')
  }
  // then under the form
  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <h2>Login</h2>
      <form
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'
        }}
        onSubmit={handleFormSubmit}
      >
        <input
          type='text'
          placeholder='Username'
          onChange={(event) => setUserName(event.target.value)}
          value={username}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <button type='submit'>Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  )
}

export default Login

/*
 form>input*2+button:submit

 controlled component, value set to clear form
*/
