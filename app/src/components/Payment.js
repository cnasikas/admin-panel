import React from 'react'
import moment from 'moment'

import { TableCell, TableRow } from 'material-ui/Table'
import DeleteIcon from 'material-ui-icons/Delete'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import IconButton from 'material-ui/IconButton'

export default class Credential extends React.Component {
  render () {
    return (
      <TableRow key={this.props.id} hover>
        <TableCell>€{this.props.amount}</TableCell>
        <TableCell>{moment(this.props.paid_at).format('DD/MM/YYYY')}</TableCell>
        <TableCell>
          <IconButton aria-label='Edit' onClick={this.props.handleEditClick}>
            <ModeEditIcon />
          </IconButton>
          <IconButton aria-label='Delete' onClick={this.props.handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    )
  }
}
