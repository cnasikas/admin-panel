import React from 'react'
import AppRoot from './components/Root'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
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
