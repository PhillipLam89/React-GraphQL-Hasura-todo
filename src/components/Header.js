import React from 'react'

function Header(props) {
  return (
    <div>
      Welcome, {props.user}!
      <button onClick={() => props.setUser('')}>Log Out</button>
    </div>
  )
}

export default Header
