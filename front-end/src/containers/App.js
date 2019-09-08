import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

import NoMatch from '../components/NoMatch'

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
          <Switch>
          <Route exact path="/" render={() => <h1>Root Route</h1>} />
          <Route path="/countries" render={() => <h1>List of countries</h1>} />
          <Route component={NoMatch} />
          </Switch>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
