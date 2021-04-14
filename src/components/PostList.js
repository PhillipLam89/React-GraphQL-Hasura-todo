import React from 'react'
import Post from './Post'

function PostList({posts}) { //we can destructure these variables straight from props in the argument
  return posts.map((post, index) => (<Post key={post.id} {...post}/>))  // {...post} destructures the object and passes it as props. Each index of the 'posts' array is an obj
}

export default PostList
