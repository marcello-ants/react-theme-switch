import React from 'react'
import styled, {css} from 'styled-components'

const FoxFace = styled.div`
  display: block;
  position: absolute;
  bottom: -20px;
  height: 140px;
  width: 135px;
  margin: 0 50px;
  background: #E86A47;
  transition: bottom 1s;
  -webkit-transition: bottom .15s ease-in-out;
  
  :before {
    width: 0;
    height: 0;
    border-left: 0px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 30px solid #E86A47;
    top: -30px;
    left: 0;
    position: absolute;
    content: "";
  }

  :after {
    width: 0;
    height: 0;
    border-right: 0px solid transparent;
    border-left: 60px solid transparent;
    border-bottom: 30px solid #E86A47;
    top: -30px;
    right: 0;
    position: absolute;
    content: "";
  }

  :hover {
    bottom: -30px;
  }

  ${props => {
    if (!props.theme.day) {
      return css`
        background: #C74628;

        :before {
          width: 0;
          height: 0;
          border-left: 0px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 30px solid #C74628;
          top: -30px;
          left: 0;
          position: absolute;
          content: "";
        }

        :after {
          width: 0;
          height: 0;
          border-right: 0px solid transparent;
          border-left: 60px solid transparent;
          border-bottom: 30px solid #C74628;
          top: -30px;
          right: 0;
          position: absolute;
          content: "";
        }
      `
    }
  }}
`
const Eye = styled.section`
  display: block;
  position: absolute;
  background: #FFFFFF;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  bottom: 90px;
  transition: all .15s linear;

  ${props => {
    if (!props.theme.day) {
      return css`
        height: 2px; 
        bottom: 90px;

        :hover {
          height: 15px; 
          bottom: 85px;
        }
      `
    }
  }}
`

const LeftEye = styled(Eye)`
  left: 30px;
`

const RightEye = styled(Eye)`
  right: 30px;
`

const Nose = styled.span`
  display: block;
  position: relative;
  background: #333;
  height: 12px;
  width: 12px;
  border-radius: 100%;
  margin: 0 auto;
  top: 50px;
`

const Neck = styled.div`
  display: block;
  position: relative;
  width: 0px;
  height: 0px;
  top: 55px;
  border-style: solid;
  border-width: 60px 70px 0 65px;
  border-color: #ffffff transparent transparent transparent;
`

function Fox() {
  return (
    <FoxFace>
      <LeftEye />
      <RightEye />
      <Nose />
      <Neck />
    </FoxFace>
  )
}

export default Fox