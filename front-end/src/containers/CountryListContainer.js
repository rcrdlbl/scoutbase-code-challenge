import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import styled from 'styled-components'

import CountryListItem from '../components/CountryListItem'

const COUNTRIES = gql`
  {
    countries {
      code
      name
      continent { name }
      languages {
        name
        native
      }
    }
  }
`

const CountryListContainer = () => {
  const { loading, error, data } = useQuery(COUNTRIES)

  if (loading) return <h3>Loading</h3>
  if (error) return <h3>Error</h3>

  return data.countries.map((country) => (
    <CountryListItem key={country.code} country={country}></CountryListItem>
  ))
}

export default CountryListContainer
