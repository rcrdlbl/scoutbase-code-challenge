import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'

import LoadingSign from '../components/LoadingSign'
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

  if (loading) return <LoadingSign>Loading</LoadingSign>
  if (error) return <LoadingSign>Error</LoadingSign>

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

  // Return sorted countries

  const dataIn = true

  Object.keys(listItems).sort().forEach(function(prop) {
    results.push(<CSSTransition in={dataIn} key={prop} timeout={500} classNames="fadein"><CountryGroupHeader key={prop}>{prop}</CountryGroupHeader></CSSTransition>)
    listItems[prop].map((country) => (
      results.push(<CSSTransition in={dataIn} key={country.code + prop} timeout={500} classNames="fadein"><CountryListItem key={country.code + prop} country={country}></CountryListItem></CSSTransition>)
    ))
  })


  return results
}

export default CountryListContainer
