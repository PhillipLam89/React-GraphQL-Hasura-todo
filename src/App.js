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
const ADD_TODO = gql`
mutation addTodo($text: String!) {
  insert_todos(objects: {text: $text}) {
    returning {
      id
      text
      done
    }
  }
}
`
function App() {
  const [todoText, setTodoText] = React.useState('')
  const {data, loading, error} = useQuery(GET_TODOS)
  const [toggleTodo] =  useMutation(TOGGLE_TODO) //useMutation will return an array with a sepcial function "toggleTodo" which we destructure
  const [addTodo] = useMutation(ADD_TODO)

  async function handleToggleTodo({id, done}) {
   const data = await toggleTodo({variables: {id, done: !done}}) //we must use async/await or promise chaining here since toggleTodo returns a promise
    console.log('toggled this todo item ==>',data)
  }
  async function handleAddingTodo(e) {
    e.preventDefault()
    if (!todoText.trim()) return;
    const data = await addTodo({variables: {text: todoText}, refetchQueries: [{query: GET_TODOS}]})
    //refetchQueries allows Apollo to query our newly updated database right away (after adding a new todo) and will display all items instantly. Otherwise, we would have to refresh
    // to display the newest items due to how Apollo's caching works
    console.log('newest todo added ==>', data)
    setTodoText('')
  }


  if (error) return <h1>Error while fetching data...</h1>
  return loading ? <h1>Loading...</h1> :  (

    <div className="vh-100 code flex flex-column items-center bg-purple white pa3">
      <h1 className="f2-l">GraphQL Checklist
          <span role="img" aria-label="Checkmark">✔️</span>
      </h1>

      <form onSubmit={handleAddingTodo} className="mb3">
        <input className="pa2 f4 b--dashed"
          type="text"
          placeholder="write your todo"
          onChange={e => setTodoText(e.target.value)}
          value={todoText}
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
