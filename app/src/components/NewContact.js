import React from 'react'
import List, { ListItem, ListItemIcon } from 'material-ui/List'
import Input from 'material-ui/Input'
import TextField from 'material-ui/TextField'
import EmailIcon from 'material-ui-icons/Email'
import PhoneIcon from 'material-ui-icons/Phone'
import NoteIcon from 'material-ui-icons/Note'
import BusinessIcon from 'material-ui-icons/Business'
import PersonIcon from 'material-ui-icons/Person'
import Avatar from 'material-ui/Avatar'
import LinkIcon from 'material-ui-icons/Link'
import LocationOnIcon from 'material-ui-icons/LocationOn'

export default class NewContact extends React.Component {
  render () {
    return (
      <List className='new-contact'>
        <ListItem className='new-contact-list-item'>
          <ListItemIcon className='new-contact-list-avatar'>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemIcon>
          <TextField
            placeholder='First Name'
            className='dialog-input'
            name='first_name'
            value={this.props.first_name}
            onChange={this.props.handleInputChange}
            inputProps={{
              'aria-label': 'First Name'
            }}
          />
          <TextField
            placeholder='Last Name'
            className='dialog-input'
            name='last_name'
            value={this.props.last_name}
            onChange={this.props.handleInputChange}
            inputProps={{
              'aria-label': 'Last Name'
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon className='new-contact-list-icon'>
            <BusinessIcon />
          </ListItemIcon>
          <TextField
            placeholder='Company'
            className='dialog-input'
            name='company'
            value={this.props.company}
            onChange={this.props.handleInputChange}
            inputProps={{
              'aria-label': 'Company'
            }}
          />
          <TextField
            placeholder='Job Title'
            className='dialog-input'
            name='job_title'
            value={this.props.job_title}
            onChange={this.props.handleInputChange}
            inputProps={{
              'aria-label': 'Job Title'
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon className='new-contact-list-icon'>
            <EmailIcon />
          </ListItemIcon>
          <Input
            placeholder='Email'
            name='email'
            className='dialog-input'
            value={this.props.textmask}
            inputComponent={this.props.maskInput}
            onChange={this.props.handleInputChange}
            inputProps={{
              'aria-label': 'Email'
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon className='new-contact-list-icon'>
            <PhoneIcon />
          </ListItemIcon>
          <TextField
            value={this.props.phone}
            name='phone'
            placeholder='Phone'
            className='dialog-input'
            onChange={this.props.handleInputChange}
            inputProps={{
              'aria-label': 'Phone'
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon className='new-contact-list-icon'>
            <LocationOnIcon />
          </ListItemIcon>
          <TextField
            value={this.props.address}
            name='address'
            placeholder='Address'
            className='dialog-input'
            onChange={this.props.handleInputChange}
            inputProps={{
              'aria-label': 'Address'
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon className='new-contact-list-icon'>
            <LinkIcon />
          </ListItemIcon>
          <TextField
            value={this.props.website}
            name='website'
            placeholder='Website'
            className='dialog-input'
            onChange={this.props.handleInputChange}
            inputProps={{
              'aria-label': 'Website'
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon className='new-contact-list-icon'>
            <NoteIcon />
          </ListItemIcon>
          <TextField
            id='multiline-flexible'
            className='dialog-input'
            label='Notes'
            multiline
            name='notes'
            rowsMax='4'
            value={this.props.notes}
            onChange={this.props.handleInputChange}
            inputProps={{
              'aria-label': 'Notes'
            }}
          />
        </ListItem>
      </List>
    )
  }
}
