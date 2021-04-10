import React from 'react'

function Post({post, user}) {
  return (
  <>
    <br></br>
    {post.image && (
      <img alt="" src={URL.createObjectURL(post.image)} style={{borderRadius: 10, height: 100, width: 200, objectFit: 'cover'}} />
    )}
      <p>Content: {post.content}</p>
      <h3>Posted by: {user}</h3>
  </>
  )
}

export default Post
