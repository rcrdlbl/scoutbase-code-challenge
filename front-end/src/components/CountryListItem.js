import React, { Component } from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
margin: 5px;
border: 0.75px solid #575657;
border-radius: 3px;
display: inline-block;
height: 100%;
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
display: inline-block;
border-top: 1px solid #575657;
width: 100%;
`

const EnglishLangNames = styled.div`
display: inline-block;
margin-right: 1em;
`

const NativeLangNames = styled.div`
display: inline-block;
`

const LangList = styled.ul`
padding-left: 0.8rem;
display: inline-block;
`

const LangListItem = styled.li`
  font-size: 0.65em;
`

class CountryListItem extends Component {
  getEnglishLangNames(langs) {
    const langNames = langs.map((lang) => {
      if (lang.name !== null) {
        return <LangListItem key={lang.name}>{lang.name}</LangListItem>
      }
    })
    return langNames
  }

  getNativeLangNames(langs) {
    const nativeNames = langs.map((lang) => {
      if (lang.name !== null) {
        return <LangListItem key={lang.name}>{lang.native}</LangListItem>
      }
    })
    return nativeNames
  }

  render() {
    return(
      <ItemContainer>
        <CountryName>{this.props.country.name}</CountryName>
        <CountryContinent>{this.props.country.continent.name}</CountryContinent>
          <LangListContainer>
            <EnglishLangNames>
              <LangList>
                {this.getEnglishLangNames(this.props.country.languages)}
              </LangList>
            </EnglishLangNames>
            <NativeLangNames>
              <LangList>
                {this.getNativeLangNames(this.props.country.languages)}
              </LangList>
            </NativeLangNames>
          </LangListContainer>
      </ItemContainer>
    )
  }
}

export default CountryListItem
