import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: "https://countries.trevorblades.com"
})

const client = new ApolloClient({
  cache,
  link
})

class App extends Component {
  render() {
    return(
      <ApolloProvider client={client}>
        <Router>
          <Route path="/" render={() => <h1>Root Route</h1>} />
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
