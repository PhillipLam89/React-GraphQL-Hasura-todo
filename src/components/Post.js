import React from 'react'
import {UserContext} from '../App'

function Post({image, content, user}) {

  return (
  <UserContext.Consumer>
    {currentUser => (
      <div>
        <br></br>
        {image && (
          <img alt="" src={URL.createObjectURL(image)} style={{borderRadius: 10, height: 100, width: 200, objectFit: 'cover'}} />
        )}
          <p>Content: {content}</p>
          <h3 style={{color: currentUser === user && 'green'}}>Posted by: {user}</h3>
      </div>
    )}
  </UserContext.Consumer>
  )
}

export default Post
