import React from 'react'
import { Link } from 'react-router-dom'
import { withTheme } from 'material-ui/styles'

import {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List'

import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

class Contact extends React.Component {
  render () {
    return (
      <ListItem button to={'/contact/' + this.props.id} component={Link}>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: this.props.theme.palette.secondary.main}}>
            {this.props.first_name.charAt(0).toUpperCase()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={this.props.first_name + ' ' + this.props.last_name}
        />
        <ListItemText
          primary={this.props.email}
        />
        <ListItemText
          primary={this.props.phone}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label='Delete' onClick={() => this.props.deleteHandle(this.props.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default withTheme()(Contact)
