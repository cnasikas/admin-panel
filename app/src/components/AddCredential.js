import React from 'react'
import { withStyles } from 'material-ui/styles'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import List, { ListItem, ListItemIcon } from 'material-ui/List'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'

import TitleIcon from 'material-ui-icons/Title'
import AccountBoxIcon from 'material-ui-icons/AccountBox'
import LockIcon from 'material-ui-icons/Lock'
import LinkIcon from 'material-ui-icons/Link'

const dialogClasses = {
  paperWidthMd: {
    minWidth: 700
  }
}

class AddCredential extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      username: '',
      password: '',
      access_url: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.credential !== this.state) {
      this.setState({ ...nextProps.credential })
    }
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
    this.props.handleSubmit(this.state, 'addCredential', 'addCredentialDialog')
  }

  render () {
    return (
      <Dialog maxWidth='md' className='add-project-dialog' classes={this.props.classes} open={this.props.open}>
        <DialogTitle>Add Credential</DialogTitle>
        <form noValidate autoComplete='off' onSubmit={this.submit}>
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
                    value: this.state.title,
                    onChange: this.handleInputChange
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <Input
                  placeholder='Username'
                  name='username'
                  type='text'
                  className='dialog-input'
                  inputProps={{
                    'aria-label': 'Username',
                    value: this.state.username,
                    onChange: this.handleInputChange
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LockIcon />
                </ListItemIcon>
                <Input
                  placeholder='Password'
                  name='password'
                  type='text'
                  className='dialog-input'
                  inputProps={{
                    'aria-label': 'Password',
                    value: this.state.password,
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
                  name='access_url'
                  type='url'
                  className='dialog-input'
                  inputProps={{
                    'aria-label': 'Url',
                    value: this.state.access_url,
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

export default withStyles(dialogClasses)(AddCredential)
