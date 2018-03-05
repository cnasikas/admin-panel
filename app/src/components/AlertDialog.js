import React from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'

export default class AlertDialog extends React.Component {
  render () {
    return (
      <Dialog open={this.props.open} onClose={this.handleRequestClose}>
        <DialogTitle>{this.props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {this.props.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.disagree.handle} color='primary'>
            {this.props.disagree.text}
          </Button>
          <Button onClick={this.props.agree.handle} color='primary'>
            {this.props.agree.text}
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
