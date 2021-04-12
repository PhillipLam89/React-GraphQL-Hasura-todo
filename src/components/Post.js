import React from 'react'
import {UserContext} from '../App'
import timeRightNow from '../GetCurrentTimePST'
import {getTimeFromDate} from '../GetCurrentTimePST'

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
      <p>Posted at: {getTimeFromDate}</p>
      <div style={{background: 'red', width: '100%', height: '2px'}}></div>

  </div>
  )
}

export default Post
