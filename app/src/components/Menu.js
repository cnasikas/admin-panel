import React from 'react'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'

import FolderIcon from 'material-ui-icons/Folder'
import PeopleIcon from 'material-ui-icons/People'
import DeleteIcon from 'material-ui-icons/Delete'
import SettingsIcon from 'material-ui-icons/Settings'
import DashboardIcon from 'material-ui-icons/Dashboard'

import '../css/Header.css'

export default class Menu extends React.Component {
  render () {
    return (
      <Drawer variant='permanent' anchor='left' className='drawer'>
        <div className='drawer-wrapper'>
          <div className='drawer-menu-wrapper'>
            <List>
              <ListItem button to='/' component={Link}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItem>
              <ListItem button to='/project' component={Link}>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary='Projects' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary='Partners' />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary='Trash' />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary='Settings' />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
    )
  }
}
