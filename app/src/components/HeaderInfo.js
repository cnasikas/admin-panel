import React from 'react'
import Badge from 'material-ui/Badge'
import MailIcon from 'material-ui-icons/Mail'
import FolderIcon from 'material-ui-icons/Folder'

import '../css/Header.css'

export default class HeaderInfo extends React.Component {
  render () {
    return (
      <div className='header-info'>
        { /*
        <Badge badgeContent={4} color='accent'>
          <MailIcon />
        </Badge>
        <Badge badgeContent={10} color='accent'>
          <FolderIcon />
        </Badge>
        */}
      </div>
    )
  }
}
