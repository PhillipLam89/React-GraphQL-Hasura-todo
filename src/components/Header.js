import React from 'react'

function Header({user}) {
  return (
    <div>
      Welcome, {user}!
      <button>Log Out</button>
    </div>
  )
}

export default Header
