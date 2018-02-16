import React from 'react'
import { withStyles } from 'material-ui/styles'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import List, { ListItem, ListItemIcon } from 'material-ui/List'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import LinkIcon from 'material-ui-icons/Link'
import NoteIcon from 'material-ui-icons/Note'
import TitleIcon from 'material-ui-icons/Title'

const dialogClasses = {
  paperWidthMd: {
    minWidth: 700
  }
}

class NewProject extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      url: '',
      notes: '',
      completed: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  submit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render () {
    return (
      <Dialog maxWidth='md' className='add-project-dialog' classes={this.props.classes} open={this.props.open}>
        <DialogTitle>Create Project</DialogTitle>
        <form noValidate autoComplete='off' onSubmit={this.submit} ref='test'>
          <DialogContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <TitleIcon />
                </ListItemIcon>
                <Input
                  placeholder='Title'
                  className='dialog-input'
                  name='title'
                  inputProps={{
                    'aria-label': 'Title',
                    onChange: this.handleInputChange
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
                  inputProps={{
                    'aria-label': 'Url',
                    onChange: this.handleInputChange
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
                  multiline
                  inputProps={{
                    'aria-label': 'Notes',
                    onChange: this.handleInputChange
                  }}
              />
              </ListItem>
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleCancel} color='primary'>
              Cancel
            </Button>
            <Button color='primary' type='submit'>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  }
}

export default withStyles(dialogClasses)(NewProject)
