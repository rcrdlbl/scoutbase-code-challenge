import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

import NoMatch from '../components/NoMatch'
import Home from './Home'
import CountriesContainer from './CountriesContainer'
import CountryPage from '../components/CountryPage'

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
          <Route exact path="/" component={Home} />
          <Route exact path="/countries" component={CountriesContainer} />
          <Route path="/countries/:countryCode" component={CountryPage} />
          <Route component={NoMatch} />
          </Switch>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
