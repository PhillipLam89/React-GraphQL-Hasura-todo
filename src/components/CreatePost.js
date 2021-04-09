import React from 'react'

function CreatePost() {


    const [content, setContent] = React.useState('')
    const [image, setImage] = React.useState(null)


  return (
    <div>
      <h1>Create New Post</h1>
      <form>
        <input onChange={e =>setContent(e.target.value)} type="text" placeholder="add Content"></input>
        <input onChange={e =>setImage(e.target.files[0])} type="file"></input>
        <br></br>
        <br></br>
        <button type="submit">Submit Post</button>
      </form>
      <p>{content}</p>
      {image && <img style={{height: 100, width: 200, objectFit: 'cover'}} src={URL.createObjectURL(image)} />}
    </div>
  )
}

export default CreatePost
