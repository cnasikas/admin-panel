import React from 'react'
import AppHeader from './Header'
import AppMain from './Main'
import BgTransparent from './BgTransparent'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <BgTransparent />
        <AppHeader className='app-header' />
        <AppMain className='app-main' />
      </div>
    )
  }
}
