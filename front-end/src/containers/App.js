import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return(
      <Router>
        <Route path="/" render={() => <h1>Root Route</h1>} />
      </Router>
    )
  }
}

export default App
