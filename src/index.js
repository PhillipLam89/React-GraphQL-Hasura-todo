import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://react-graph-ql.herokuapp.com/v1/graphql'
})



const rootNode = document.querySelector('#root')
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
    ,rootNode
  )
