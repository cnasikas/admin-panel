import React from 'react'

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'

import Credential from './Credential.js'

export default class Credentials extends React.Component {
  render () {
    let credentials = this.props.credentials.map((cred, index) => <Credential key={index} {...cred} handleEditClick={() => { this.props.editHandle(cred.id) }}
      handleDeleteClick={() => { this.props.deleteHandle(cred.id) }} />)

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Url</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {credentials}
        </TableBody>
      </Table>
    )
  }
}
