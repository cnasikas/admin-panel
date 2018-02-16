import React from 'react'
import moment from 'moment'
import { withStyles } from 'material-ui/styles'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import List, { ListItem, ListItemIcon } from 'material-ui/List'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import classnames from 'classnames'

import LinkIcon from 'material-ui-icons/Link'
import IconButton from 'material-ui/IconButton'
import NoteIcon from 'material-ui-icons/Note'
import TitleIcon from 'material-ui-icons/Title'
import AccessTimeIcon from 'material-ui-icons/AccessTime'
import EuroSymbolIcon from 'material-ui-icons/EuroSymbol'
import DoneIcon from 'material-ui-icons/Done'
import PaymentIcon from 'material-ui-icons/Payment'
import ReceiptIcon from 'material-ui-icons/Receipt'

const dialogClasses = {
  paperWidthMd: {
    minWidth: 700
  }
}

class EditProject extends React.Component {
  constructor (props) {
    super(props)
    this.state = {...this.props.project}

    this.handleInputChange = this.handleInputChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.project !== this.state) {
      this.setState({ ...nextProps.project })
    }
  }

  handleInputChange (obj, btn = false) {
    let value = ''
    let key = ''
    let target = {}

    if (btn) {
      value = obj[Object.keys(obj)[0]]
      key = Object.keys(obj)[0]
    } else {
      target = obj.target
      value = target.value
      key = target.name
    }

    this.updateProject(key, value)

    if ('completed' in obj && obj.completed === true) {
      this.updateProject('completed_at', moment().format('YYYY-MM-DD HH:mm:ss'))
    }
  }

  updateProject (key, value) {
    this.setState(prevState => ({
      [key]: value
    }))
  }

  submit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render () {
    return (
      <Dialog maxWidth='md' className='add-project-dialog' classes={this.props.classes} open={this.props.open}>
        <DialogTitle>Edit Project</DialogTitle>
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
                  <LinkIcon />
                </ListItemIcon>
                <Input
                  placeholder='Url'
                  name='url'
                  type='url'
                  className='dialog-input'
                  inputProps={{
                    'aria-label': 'Url',
                    value: this.state.url,
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
                    value: this.state.notes,
                    onChange: this.handleInputChange
                  }}
              />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <Input
                  placeholder='Hours'
                  name='hours'
                  type='text'
                  className='dialog-input'
                  inputProps={{
                    'aria-label': 'Hours',
                    value: this.state.hours,
                    onChange: this.handleInputChange
                  }}
              />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EuroSymbolIcon />
                </ListItemIcon>
                <Input
                  placeholder='Ammount'
                  name='amount'
                  type='text'
                  className='dialog-input'
                  inputProps={{
                    'aria-label': 'Ammount',
                    value: this.state.amount,
                    onChange: (e) => this.handleInputChange(e)
                  }}
              />
              </ListItem>
              <ListItem>
                <IconButton aria-label='Mark completed' className={classnames({'active': this.state.completed})}
                  onClick={() => this.handleInputChange({completed: !this.state.completed}, true)}>
                  <DoneIcon />
                </IconButton>
                <IconButton aria-label='Mark paid' className={classnames({'active': this.state.paid})} onClick={() => this.handleInputChange({paid: !this.state.paid}, true)}>
                  <PaymentIcon />
                </IconButton>
                <IconButton aria-label='Mark receipt' className={classnames({'active': this.state.receipt})} onClick={() => this.handleInputChange({receipt: !this.state.receipt}, true)}>
                  <ReceiptIcon />
                </IconButton>
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

export default withStyles(dialogClasses)(EditProject)
