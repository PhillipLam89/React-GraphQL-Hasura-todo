import React from 'react'
import {useQuery, useMutation} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'


const GET_TODOS = gql`
query getTodos {
  todos {
    done
    text
    id
  }
}
`
const TOGGLE_TODO = gql`
mutation toggleTodo($id: uuid!, $done: Boolean!) {
  update_todos(where: {id: {_eq: $id}}, _set: {done: $done}) {
    returning {
      done
      id
      text
    }
  }
}
`

function App() {
  const {data, loading, error} = useQuery(GET_TODOS)
  const [toggleTodo] =  useMutation(TOGGLE_TODO)

  async function handleToggleTodo({id, done}) {
   const data = await toggleTodo({variables: {id, done: !done}})
    console.log(data)
  }

  if (error) return <h1>Error while fetching data...</h1>
  return loading ? <h1>Loading...</h1> :  (

    <div className="vh-100 code flex flex-column items-center bg-purple white pa3">
      <h1 className="f2-l">GraphQL Checklist
          <span role="img" aria-label="Checkmark">✔️</span>
      </h1>

      <form className="mb3">
        <input className="pa2 f4 b--dashed"
          type="text"
          placeholder="write your todo"
         />
         <button className="pa2 f4 bg-green" type="submit">Create</button>
      </form>
        <div className="flex items-center justify-center flex-column">
          {data.todos.map(todo => (
          <p onDoubleClick={() => handleToggleTodo(todo)} key={todo.id}>
            <span className={`pointer list pa1 f3 ${todo.done && 'strike'}`}>
              {todo.text}
            </span>
            <button className="bg-transparent bn f4" style={{marginLeft: '.5rem', color: 'red', transform: 'scale(2)'}}>&times;</button>
          </p>
          ))}
       </div>
    </div>
  )
}

export default App
