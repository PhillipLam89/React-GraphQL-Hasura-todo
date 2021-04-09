import React from 'react'

function Login(props) {

  const [username, setUsername] = React.useState('')


  function handleSubmit(e) {
    e.preventDefault()
    props.setUser(username)

  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setUsername(e.target.value)} placeholder="input a username"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
