import React from 'react'
import List, { ListItem, ListItemIcon } from 'material-ui/List'
import Input from 'material-ui/Input'
import LinkIcon from 'material-ui-icons/Link'
import NoteIcon from 'material-ui-icons/Note'
import TitleIcon from 'material-ui-icons/Title'

export default class NewProject extends React.Component {
  render () {
    return (
      <List>
        <ListItem>
          <ListItemIcon>
            <TitleIcon />
          </ListItemIcon>
          <Input
            placeholder='Title'
            className='dialog-input'
            value={this.props.title}
            name='title'
            inputProps={{
              'aria-label': 'Title',
              onChange: this.props.handleInputChange
            }}
        />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <Input
            placeholder='Url'
            name='url'
            type='url'
            className='dialog-input'
            value={this.props.url}
            inputProps={{
              'aria-label': 'Url',
              onChange: this.props.handleInputChange
            }}
        />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NoteIcon />
          </ListItemIcon>
          <Input
            placeholder='Notes'
            name='notes'
            className='dialog-textarea'
            value={this.props.notes}
            multiline
            inputProps={{
              'aria-label': 'Notes',
              onChange: this.props.handleInputChange
            }}
        />
        </ListItem>
      </List>
    )
  }
}
