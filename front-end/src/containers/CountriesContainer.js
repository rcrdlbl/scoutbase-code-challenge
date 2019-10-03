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
  padding: 1em;
  margin-bottom: 1.25em;
  margin-top: 1em;
  overflow-x: scroll;
`

const SortLink = styled.div.attrs(props => ({
  active: props.active ? "underline" : "none"
}))`
  display: inline-block;
  font-size: 2.5em;
  font-weight: 700;
  margin-left: 1em;
  background: #575657;
  color: #FEFEFA;
  padding: 0.25em;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  cursor: pointer;

  text-decoration: ${props => props.active};

  transition: all .1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  z-index: 2;
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
        <CountryListContainer sortBy={this.state.sortBy} />
      </ListContainer>
      </>
    )
  }
}

export default CountriesContainer
