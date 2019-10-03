import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import {CSSTransition} from 'react-transition-group'


const COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
      continent {name}
      native
      phone
      currency
      emoji
    }
  }
`

const PageContainer = styled.div`
  padding-top: 2.25em;
`

const BackButton = styled.div`
  display: inline-block;
  font-size: 1.5em;
  font-weight: 700;
  margin-left: 1em;
  background: #575657;
  color: #FEFEFA;
  padding: 0.25em;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  float: left;
  transition: all .1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  z-index: 2;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    width: fit-content;
    float: none;
    margin: 0 auto;
    margin-bottom: 0.5em;
  }
`

const MarqueeContainer = styled.div`
  font-family: "IBM Plex Mono Light", monospace;
  background: #575657;
  color: #FEFEFA;
  font-size: 1.75em;
  width: 200px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  white-space: nowrap;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin-bottom: 2em;
`

// Looks odd but I've found it's the best way to ensure the gapless effect when having the marquee cycle

const firstMarqueeAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`

const secondMarqueeAnimation = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
`

const FirstMarqueeText = styled.span`
  display: inline-block;
  animation: ${firstMarqueeAnimation} 10s linear infinite;
`

const SecondMarqueeText = styled.span`
  display: inline-block;
  animation: ${secondMarqueeAnimation} 10s linear infinite;
  animation-delay: 5s;
`

const InfoText = styled.div`
  font-size 2.75em;
  font-weight: bold;
  padding-right: 2em;
  padding-left: 2em;
  padding-bottom: 2em;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

`

const InfoEmphasis = styled.span`
  display: inline-block;
  background: #FEFEFA;
  border-radius: 10px;
  padding-left: 0.1em;
  padding-right: 0.1em;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.4);
`

function CountryPage({ match }) {

  const { loading, error, data } = useQuery(COUNTRY, {
    variables: { code: match.params.countryCode }
  })

  if (loading) return <h1>Loading</h1>
  if (error) return <h1>Error</h1>

  return(
  <PageContainer>
    <div>
      <BackButton>All Countries</BackButton>
      <MarqueeContainer>
        <FirstMarqueeText>
          {data.country.name} {data.country.emoji} {data.country.native} {data.country.emoji}
        </FirstMarqueeText>
        <SecondMarqueeText>
           {data.country.name} {data.country.emoji} {data.country.native} {data.country.emoji}
        </SecondMarqueeText>
      </MarqueeContainer>
    </div>
    <InfoText>
      <InfoEmphasis>{data.country.name}</InfoEmphasis> is a country in <InfoEmphasis>{data.country.continent.name}</InfoEmphasis>. Their official currency is <InfoEmphasis>{data.country.currency}</InfoEmphasis>.
    </InfoText>

    <InfoText>
      If you'd like to find out more about <InfoEmphasis>{data.country.name}</InfoEmphasis>, you can try calling any valid phone number that starts with <InfoEmphasis>+{data.country.phone}</InfoEmphasis>.
    </InfoText>

  </PageContainer>
  )
}

export default CountryPage
