import React from 'react'
import moment from 'moment'
import { withStyles } from 'material-ui/styles'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import List, { ListItem, ListItemIcon } from 'material-ui/List'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import DateRangeIcon from 'material-ui-icons/DateRange'
import EuroSymbolIcon from 'material-ui-icons/EuroSymbol'

const dialogClasses = {
  paperWidthMd: {
    minWidth: 700
  }
}

class EditPayment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {...this.props.payment}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.payment !== this.state) {
      this.setState({ ...nextProps.payment })
    }
  }

  handleInputChange (obj, finance = false, btn = false) {
    let target = obj.target
    let value = target.value
    let key = target.name

    this.updatePayment(key, value)
  }

  updatePayment (key, value) {
    if (key === 'paid_at') {
      value = moment(value).format('YYYY-MM-DD')
    }

    this.setState(prevState => ({
      [key]: value
    }))
  }

  submit (event) {
    event.preventDefault()
    this.props.handleSubmit('editPayment', this.state, 'editPaymentDialog', 'updatePayment')
  }

  render () {
    return (
      <Dialog maxWidth='md' className='add-project-dialog' classes={this.props.classes} open={this.props.open}>
        <DialogTitle>Edit Credential</DialogTitle>
        <form noValidate autoComplete='off' onSubmit={this.submit}>
          <DialogContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EuroSymbolIcon />
                </ListItemIcon>
                <Input
                  placeholder='Amount'
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
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <TextField
                  id='paid_at'
                  name='paid_at'
                  label='Paid at'
                  type='date'
                  InputLabelProps={{
                    shrink: true
                  }}
                  inputProps={{
                    'aria-label': 'Paid at',
                    value: this.state.paid_at,
                    onChange: (e) => this.handleInputChange(e)
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

export default withStyles(dialogClasses)(EditPayment)
