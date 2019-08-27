import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as themes from './styles/themes'
import ThemeContext from './styles/themes/context'
import TodoList from './components/TodoList'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  const [theme, setTheme] = React.useState(themes.dark)

  function toggleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  } 

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <ThemeSwitcher toggleTheme={toggleTheme}/>
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme}>
              <TodoList/>
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
