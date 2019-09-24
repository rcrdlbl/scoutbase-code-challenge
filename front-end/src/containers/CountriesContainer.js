import React, { Component } from 'react'
import styled from 'styled-components'

import CountryListContainer from './CountryListContainer'


const ListContainer = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
`

const NavContainer = styled.header`
display: block;
`

class CountriesContainer extends Component {
  render() {
    return(
      <>
      <NavContainer><h1>NAV GOES HERE</h1></NavContainer>
      <ListContainer>
        <CountryListContainer />
      </ListContainer>
      </>
    )
  }
}

export default CountriesContainer
