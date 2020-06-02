import React, { useState } from 'react'

// instead of mutating our form properties, replace entire form object, by creating our intial state outside the component, as a variable, then reference it in useState. Then easily clear our form in handleSubmit with setForm(initialFormState)
const initialFormState = {
  username: '',
  email: '',
  password: ''
}

const Register = () => {
  const [form, setForm] = useState(initialFormState)
  // create a user piece of state
  const [user, setUser] = useState(null)

  // this will get an event from onChange and call setForm and update the property in form state based on event.target.value
  // the final line overwrites the values.
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  // pass all our form's state to setUser, then display under form
  const handleSubmit = (event) => {
    event.preventDefault()
    setUser(form)
    setForm(initialFormState)
  }

  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <h2>Register</h2>
      <form
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'
        }}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={handleChange}
          value={form.username}
        />
        <input
          type='email'
          placeholder='Email Address'
          name='email'
          onChange={handleChange}
          value={form.email}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
          value={form.password}
        />
        <button type='submit'>Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  )
}

export default Register

// using one state object
// give inputs name attributes,
