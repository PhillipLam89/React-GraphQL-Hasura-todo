import React from 'react'
import {UserContext} from '../App'

function Post({image, content, user}) {
     const currentUser = React.useContext(UserContext)
     const isCurrentUser = currentUser === user;
  return (
  <div>
    {image && (
      <img alt="" src={URL.createObjectURL(image)} style={{borderRadius: 10, height: 100, width: 200, objectFit: 'cover'}} />
    )}
      <p>Content: {content}</p>
      <h3 style={{color: currentUser === user ? 'green' : 'purple '}}>Posted by: {user}{currentUser === user ? <span style={{color: 'goldenrod'}}> (me)</span>: ''}</h3>
  </div>
  )
}

export default Post
