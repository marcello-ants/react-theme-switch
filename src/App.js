import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import * as themes from './styles/themes'
import ThemeContext from './styles/themes/context'
import Circle from './components/Circle'
import Switch from './components/Switch'

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

function App() {
  const [theme, setTheme] = React.useState(themes.light)

  function toggleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  } 

  return (
    <Container>
      <ThemeContext.Provider value={theme}>
        <Switch toggleTheme={toggleTheme}/>
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme}>
              <Circle />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </Container>
  )
}

export default App;
