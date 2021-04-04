import React from 'react';
import ReactDOM from 'react-dom';

const rootNode = document.querySelector('#root')

function Header(props) {
  return <h1>hello {props.fagName} </h1>
}


function App() {
  const people = ['phil', 'dave', 'james']

  return (

    <ul>
      {people.map(person => <Person person={person}/>)}
    </ul>
  )
}


  function Person(props) {

      function handlePersonClick(e) {
          console.log(e.target.innerHTML)
      }

      return <li style={{cursor: 'pointer'}} onClick={handlePersonClick}>{props.person}</li>
  }



ReactDOM.render(<App />,rootNode)
