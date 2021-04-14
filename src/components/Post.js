import React from 'react'
import {UserContext} from '../App'
import {PostContext} from '../App'

function Post({image, content, user, id}) {
     const currentUser = React.useContext(UserContext)
     const dispatch = React.useContext(PostContext).dispatch
     function handleDelete() {
       dispatch({type: 'DELETE_POST', payload: {id}})
     }

  return (
  <div>
    {image && (
      <img alt="" src={URL.createObjectURL(image)} style={{borderRadius: 10, height: 100, width: 200, objectFit: 'cover'}} />
    )}
      <p>Content: {content}</p>
      <h3 style={{color: currentUser.toLowerCase() === user.toLowerCase() ? 'green' : 'purple '}}>Posted by: {user} {currentUser === user ? <span style={{color: 'goldenrod'}}> (me)</span>: ''}</h3>
      <div>
       {currentUser.toLowerCase() === user.toLowerCase() && <button onClick={handleDelete} style={{display: 'block', margin: '1rem 0'}}>DELETE Post</button>}
      </div>

      <div style={{background: 'red', width: '100%', height: '2px'}}></div>


  </div>
  )
}

export default Post
