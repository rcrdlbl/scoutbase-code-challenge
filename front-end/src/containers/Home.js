import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CenteredDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

class Home extends Component {
  render() {
    return(
    <CenteredDiv>
      <h1><Link to="/countries">All Countries</Link></h1>
    </CenteredDiv>
    )
  }
}

export default Home
