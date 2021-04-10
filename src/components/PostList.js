import React from 'react'
import Post from './Post'

function PostList({posts, content, user}) { //we can destructure these variables straight from props in the argument
  return posts.map((post, index) => (<Post key={index} post={post} user={user}/>))
}

export default PostList
