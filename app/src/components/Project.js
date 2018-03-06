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
import FolderIcon from 'material-ui-icons/Folder'
import DeleteIcon from 'material-ui-icons/Delete'

class Project extends React.Component {
  render () {
    return (
      <ListItem button to={'/project/' + this.props.id} component={Link}>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: this.props.theme.palette.secondary.main}}>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={this.props.title}
          secondary={this.props.url}
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

export default withTheme()(Project)
