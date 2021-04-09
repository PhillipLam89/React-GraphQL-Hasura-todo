import React from 'react'

function PostList({posts, content, user}) { //we can destructure these variables straight from props in the argument
  return (
    posts.map((post,index) => (
        <div key={index}>
          <br></br>
          {post.image && (
            <img src={URL.createObjectURL(post.image)} style={{borderRadius:'10px', border:'2px solid red',height: 100, width: 200, objectFit: 'cover'}} />
          )}
            <p>Content: {post.content}</p>
            <div>Posted by: {user}</div>
        </div>
     ))
  )
}

export default PostList
