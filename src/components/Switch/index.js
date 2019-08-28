import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  
`

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color .2s; 
`

const Button = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`

export const Checkbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  :checked + ${Label} ${Button} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`

function Switch({toggleTheme}) {
  return (
    <Wrapper>
      <Checkbox
        id={"react-switch-new"}
        type="checkbox"
        onClick={toggleTheme}
      />
      <Label htmlFor={"react-switch-new"}>
        <Button/>
      </Label>
    </Wrapper>
  )
}

export default Switch