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
  padding: 0 auto;
  margin-bottom: 1.25em;
  margin-top: 1em;
  overflow-x: scroll;
`

const SortLink = styled.a.attrs(props => ({
  active: props.active ? "underline" : "none"
}))`
  font-size: 2.5em;
  font-weight: 700;
  margin-left: 1em;

  text-decoration: ${props => props.active};
`

class CountriesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: "name"
    }
  }

  render() {
    return(
      <>
      <NavContainer>
        <SortLink onClick={() => this.setState({sortBy: "name"})} active={this.state.sortBy === "name" ? true : false} >Name</SortLink>
        <SortLink onClick={() => this.setState({sortBy: "continent"})} active={this.state.sortBy === "continent" ? true : false} >Continent</SortLink>
        <SortLink onClick={() => this.setState({sortBy: "language"})} active={this.state.sortBy === "language" ? true : false}>Language</SortLink>
      </NavContainer>
      <ListContainer>
        <CountryListContainer />
      </ListContainer>
      </>
    )
  }
}

export default CountriesContainer
