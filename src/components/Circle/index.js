import React from 'react'
import styled, {css} from 'styled-components'
import Fox from '../Fox'
 
const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 235px;
  height: 235px;
  margin: 0 auto;
  border-radius: 100%;
  border: 8px solid #34A87C;
  background: ${props => props.theme.background}; 
  box-shadow: 0px 0px 5px rgba(0,0,0,0.25) inset;
  overflow: hidden;
	transition: all .5s linear;
  -webkit-transition: all .5s linear;
`

const Sun = styled.span`
  display: ${props => props.theme.day ? "block" : "none"} ;
  position: relative;
  top: 18px;
  height: 40px; width: 40px;
  background: #FFE067;
  border-radius: 100%;
  margin: 0 auto;
  left: 30px;
`

const Moon = styled.div`
  display: ${props => props.theme.day ? "none" : "block"} ;
  position: ${props => props.theme.day ? "relative" : "absolute"} ;
  
  height: 24px; width: 24px;
  background: #EEE;
  border-radius: 100%;

  ${props => {
    if (!props.theme.day) {
      return css`
        margin: 0 auto;
        top: 40px;
        left: 60px;  
      `
    }
  }}

`

function Circle() {
  return (
    <Wrapper>
      <Sun />
      <Moon />
      <Fox />
    </Wrapper>
  )
}

export default Circle