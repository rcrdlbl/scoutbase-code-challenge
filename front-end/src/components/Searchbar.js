import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const COUNTRIES = gql`
  {
    countries {
      code
      name
    }
  }
`

function getCountries() {
  const { loading, error, data } = useQuery(COUNTRIES)

  if (loading) {
    return 'Loading'
  }

  if (error) {
    return "Error"
  }

  return data
}

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : countries.filter(country =>
    country.name.toLowerCase().slice(0, inputLength) === inputValue
  )
}

const getSuggestionValue = suggestion => suggestion.name

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  <div>
)

// TODO: Finish this first

class Searchbar extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      suggestions: []
    }
  }

  
}
