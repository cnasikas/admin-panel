import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

import Menu from './Menu'
import HeaderInfo from './HeaderInfo'

import '../css/Header.css'

export default class Header extends React.Component {
  render () {
    return (
      <AppBar position='fixed' className='app-bar' id='app-bar'>
        <Toolbar disableGutters>
          <div className='left-toolbar'>
            <IconButton className='' color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography type='title' color='inherit' className='header-title'>
              Admin Panel
            </Typography>
          </div>
          <div className='right-toolbar'><HeaderInfo /></div>
        </Toolbar>
        <Menu />
      </AppBar>
    )
  }
}
