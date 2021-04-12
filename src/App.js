import React from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import postReducer from './reducer'

export const UserContext = React.createContext()
export const PostContext = React.createContext({posts: []})


function App() {
  const initialPostState = React.useContext(PostContext)

  const [state, dispatch] =  React.useReducer(postReducer, initialPostState)
  const [user, setUser] = React.useState('PHILLIP')

  React.useEffect(() => {
      document.title = user ? `${user}'s Feed` : 'Please Login'
  }, [user])


  if (!user) {
      return <Login setUser={setUser}/>
  }

  return (
        <PostContext.Provider value={{state, dispatch}}>
          <UserContext.Provider value={user} style={{padding: '1rem'}}>
            <Header user={user} setUser={setUser}/>
            <CreatePost user={user}  />
            <PostList posts={state.posts}/>
          </UserContext.Provider>
        </PostContext.Provider>)
}

export default App
