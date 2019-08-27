 import React from 'react'
 import styled from 'styled-components'

const List = styled.ul`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-family: sans-serif;
  font-size: 18px;
  
  li {
    line-height: 28px;
  }
`

 function TodoList() {
   return (
     <List>
       <li>1</li>
       <li>2</li>
       <li>3</li>
     </List>
   )
 }

 export default TodoList