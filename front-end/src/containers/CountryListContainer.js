import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import styled from 'styled-components'

import CountryListItem from '../components/CountryListItem'

const COUNTRIES = gql`
  {
    countries {
      name
      code
      continent { name }
      languages {
        name
        native
      }
    }
  }
`

const CountryGroupHeader = styled.div`
  font-size: 1.5em;
  width: 100%;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`

const groupByName = (countries) => {
  return countries.reduce(function(acc, country) {
    let key = country.name.charAt(0)
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(country)
    return acc
  }, {})
}

const groupByContinent = (countries) => {
  return countries.reduce(function(acc, country) {
    let key = country.continent.name
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(country)
    return acc
  }, {})
}

const groupByLanguage = (countries) => {
  return countries.reduce(function(acc, country) {
    country.languages.forEach(function(language) {
    let key = language.name
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(country)})
    return acc
  }, {})
}

const CountryListContainer = (props) => {
  // Initial Fetching of Country Data
  const { loading, error, data } = useQuery(COUNTRIES)

  if (loading) return <h3>Loading</h3>
  if (error) return <h3>Error</h3>

  // Group retrieved countries

  let listItems = {}
  let results = []

  switch (props.sortBy) {
    case "name":
      listItems = groupByName(data.countries)
      break
    case "continent":
      listItems = groupByContinent(data.countries)
      break
    case "language":
      listItems = groupByLanguage(data.countries)
      break
    default:
      console.log("Warning")
      break
  }

  Object.keys(listItems).sort().forEach(function(prop) {
    results.push(<CountryGroupHeader key={prop}>{prop}</CountryGroupHeader>)
    listItems[prop].map((country) => (
      results.push(<CountryListItem key={country.code + prop} country={country}></CountryListItem>)
    ))
  })

  return results
}

export default CountryListContainer
