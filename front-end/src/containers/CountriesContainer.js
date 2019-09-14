import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import styled from 'styled-components'

import CountryListContainer from './CountryListContainer'


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

const listContainer = styled.div`
  margin: 0 auto;
  padding: 0 50px;
`

const navContainer = styled.header`
`

class CountriesContainer extends Component {

  makeList() {
    const { loading, error, data } = useQuery(COUNTRIES)
    if (loading) {
      return <h3>Loading</h3>
    } else if (error) {
      return <h3>Error</h3>
    } else {
      console.log(data)
      return <p>data</p>
    }
  }

  render() {
    return(
      <listContainer>
        <navContainer><h1>NAV GOES HERE</h1></navContainer>
        <CountryListContainer />
      </listContainer>
    )
  }
}

export default CountriesContainer
