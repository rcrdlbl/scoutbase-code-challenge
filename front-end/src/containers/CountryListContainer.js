import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import styled from 'styled-components'

const COUNTRIES = gql`
  {
    countries {
      code
      name
      native
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

  return data.countries.map(({code, name, native}) => (
    <div key={code}>
      <h3><a href={"/countries/" + code}>{name} | {native}</a></h3>
    </div>
  ))
}

export default CountryListContainer
