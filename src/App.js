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

    <div className="vh-100 code flex flex-column items-center bg-purple white pa3">
      <h1 className="f2-l">GraphQL Checklist
          <span role="img" aria-label="Checkmark">✔️</span>
      </h1>

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
    </div>
  )
}

export default App
