import React from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

export const UserContext = React.createContext()

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

  return <UserContext.Provider value={user} style={{padding: '1rem'}}>
           <Header user={user} setUser={setUser}/>
           <CreatePost user={user} handleAddPost={handleAddPost} />
           <PostList posts={posts}/>
         </UserContext.Provider> //Context provider allows us to pass the 'user' prop down 2 levels directly to Post.js component. NO NEED 2 PROP DRILLZ
}

export default App
