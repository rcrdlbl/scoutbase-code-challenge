import React, { Component } from 'react'
import styled from 'styled-components'

import CountryListContainer from './CountryListContainer'


const listContainer = styled.div`
  margin: 0 auto;
  padding: 0 50px;
`

const navContainer = styled.header`
`

class CountriesContainer extends Component {
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
