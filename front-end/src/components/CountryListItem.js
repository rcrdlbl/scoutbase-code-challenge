import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'


const ItemContainer = styled.div`
  margin: 0.5rem;
  background-color: #FEFEFA;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: inline-block;
  height: 100%;
  padding-left: 1em;
  padding-right: 1em;
  transition: all .1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
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
  border-top: 0.5px solid #575657;
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
      <ItemContainer onClick={() => this.props.history.push("/countries/" + this.props.country.code)}>
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

export default withRouter(CountryListItem)
