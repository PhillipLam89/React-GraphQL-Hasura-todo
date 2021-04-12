import React from 'react'
import {PostContext} from '../App'

function CreatePost(props) {
        //React.useContext(PostContext) returns an object with the dispatch function as one of the properties
    const dispatch = React.useContext(PostContext).dispatch
    const [content, setContent] = React.useState('')
    const [image, setImage] = React.useState(null)
    const imageInputRef = React.useRef()


    function handleSubmit(e) {
      e.preventDefault()

      const post = {content, image, user: props.user}
      dispatch({type: 'ADD_POST', payload: {post}})

      setContent('') //this along with value attribute will make this input a controlled element by state
      imageInputRef.current.value = '' //refs must be used for inputs with type file since controlled state wont work
      imageInputRef.current.files = setImage('') //resets internal image selection. If not, clicking submit will post previous img even if value is ''
    }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input value={content} onChange={e =>setContent(e.target.value)} type="text" placeholder="add Content"></input>
        <input ref={imageInputRef} onChange={e =>setImage(e.target.files[0])} type="file"></input>
        <br></br>
        <br></br>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  )
}

export default CreatePost
