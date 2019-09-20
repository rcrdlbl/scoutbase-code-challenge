import React, { Component } from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
margin: 5px;
border: 0.75px solid #575657;
border-radius: 3px;
flex-direction: row;
display: inline-block;
padding-left: 5px;
padding-right: 5px;
`

const CountryName = styled.p`
font-size: 0.8em;
font-weight: bold;
margin-bottom: 2px;
`

const CountryContinent = styled.p`
font-size: 0.65em;
margin-top: 0;
`

const LangListContainer = styled.div`
display: grid;
`

const EnglishLangNames = styled.div`
`

const NativeLangNames = styled.div`
`

const LangList = styled.ul`
`

const LangListItem = `
  font-size: 0.65em;
`

class CountryListItem extends Component {
  getEnglishLangNames(langs) {
    langs.map((lang) => {
      return <LangListItem>{lang.name}</LangListItem>
    })
  }

  render() {
    return(
      <ItemContainer>
        <CountryName>{this.props.country.name}</CountryName>
        <CountryContinent>{this.props.country.continent.name}</CountryContinent>
      </ItemContainer>
    )
  }
}

export default CountryListItem

// <LangListContainer>
//   <EnglishLangNames>
//     <LangList>
//     </LangList>
//   </EnglishLangNames>
// </LangListContainer>
