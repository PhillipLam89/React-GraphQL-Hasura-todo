import React from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'




function App() {

  const [user, setUser] = React.useState('PHILLIP')
  const [posts, setPosts] = React.useState([])
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
      document.title = user ? `${user}'s Feed` : 'Please Login'
  }, [user])

  function handleAddPost(newPost) {
    setPosts([newPost, ...posts])
  }

  if (!user) {
      return <Login setUser={setUser}/>
  }

  return <div style={{padding: '1rem'}}>
           <Header user={user} setUser={setUser}/>
           <CreatePost user={user} handleAddPost={handleAddPost} />
           <PostList posts={posts} user={user}/>
         </div>
}

export default App
