import React from 'react'

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'

import Payment from './Payment.js'

export default class Credentials extends React.Component {
  render () {
    let payments = this.props.payments.map((payment, index) => <Payment key={index} {...payment} handleEditClick={() => { this.props.editHandle(payment.id) }}
      handleDeleteClick={() => { this.props.deleteHandle(payment.id) }} />)

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ammount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {payments}
        </TableBody>
      </Table>
    )
  }
}
