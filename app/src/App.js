  import React from 'react'
  import AppRoot from './components/Root'

  import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
  import purple from 'material-ui/colors/purple'
  import teal from 'material-ui/colors/teal'
  import red from 'material-ui/colors/red'

  const theme = createMuiTheme({
    palette: {
      primary: purple, // Purple and green play nicely together.
      secondary: teal,
      error: red
    }
  })

  export default class App extends React.Component {
    render () {
      return (
        <MuiThemeProvider theme={theme}>
          <AppRoot />
        </MuiThemeProvider>
      )
    }
  }
