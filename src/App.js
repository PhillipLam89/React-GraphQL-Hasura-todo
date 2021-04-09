import React from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

function App() {

  const [user, setUser] = React.useState('PHILLIP')
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
      document.title = user ? `${user}'s Feed` : 'Please Login'
  }, [user])

  if (!user) {
      return <Login setUser={setUser}/>
  }

  return <div>
           <Header user={user} setUser={setUser}/>
           <CreatePost user={user} setPosts={setPosts} posts={posts}/>
           <PostList posts={posts} user={user}/>
         </div>
}

export default App
