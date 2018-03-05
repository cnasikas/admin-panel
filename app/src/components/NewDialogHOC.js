import React from 'react'
import { withStyles } from 'material-ui/styles'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import MaskedInput from 'react-text-mask'
import emailMask from 'text-mask-addons/dist/emailMask'
import Button from 'material-ui/Button'

const dialogClasses = {
  paperWidthMd: {
    minWidth: 700
  }
}

export default function newDialog (FormComponent, data) {
  class NewDialogHOC extends React.Component {
    constructor (props) {
      super(props)
      this.state = data
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

    maskInput (props) {
      const { inputRef, ...other } = props

      let mask = []

      if (props.name === 'email') {
        mask = emailMask
      }

      if (props.name === 'phone') {
        mask = []
      }

      return (
        <MaskedInput
          {...other}
          ref={inputRef}
          mask={mask}
          placeholderChar={'\u2000'}
          showMask
        />
      )
    }

    render () {
      return (
        <Dialog maxWidth='md' className='add-dialog add-contact-dialog' classes={this.props.classes} open={this.props.open}>
          <DialogTitle>Create Contact</DialogTitle>
          <form noValidate autoComplete='off' onSubmit={this.submit} ref='test' method='post'>
            <DialogContent>
              <FormComponent handleInputChange={this.handleInputChange} {...this.state} maskInput={this.maskInput} />
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

  return withStyles(dialogClasses)(NewDialogHOC)
}
