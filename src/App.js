import React from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'

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
           {posts.map((post,index) => (
            <div key={index}>
              <br></br>
              {post.image && (
                <img src={URL.createObjectURL(post.image)} style={{borderRadius:'10px',height: 100, width: 200, objectFit: 'cover'}} />
              )}
                <p>Content: {post.content}</p>
                <div>Posted by: {user}</div>
            </div>
           ))}
         </div>
}

export default App
