import React from 'react'
import Login from './components/Login'
import Header from './components/Header'

function App() {

 const [user, setUser] = React.useState('')

  if (!user) {
      return <Login setUser={setUser}/>
  }

  return <div>
           <Header user={user} setUser={setUser}/>
         </div>
}

export default App
