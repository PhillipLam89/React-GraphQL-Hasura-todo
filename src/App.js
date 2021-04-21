import React from 'react'
import {useQuery} from '@apollo/react-hooks'
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

function App() {
  const {data, loading, error} = useQuery(GET_TODOS)
  if (error) return <h1>Error while fetching data...</h1>
  return loading ? <h1>Loading...</h1> :  (

    <React.Fragment>
      <h1>GraphQL Checklist</h1>
      {/* Todo Form */}

      <form>
        <input
          type="text"
          placeholder="write your todo"
         />
         <button type="submit">Create</button>
      </form>

      {data.todos.map(todo => (
      <p key={todo.id}>
        <span>
          {todo.text}
        </span>
        <button style={{marginLeft: '.5rem'}}>&times;</button>
      </p>
      ))}
    </React.Fragment>
  )
}

export default App
