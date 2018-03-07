import React from 'react'
import moment from 'moment'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { withTheme } from 'material-ui/styles'

import { getContact, updateContact} from '../actions/ActionCreators'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import IconButton from 'material-ui/IconButton'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import EmailIcon from 'material-ui-icons/Email'
import PhoneIcon from 'material-ui-icons/Phone'
import NoteIcon from 'material-ui-icons/Note'
import BusinessIcon from 'material-ui-icons/Business'
import LinkIcon from 'material-ui-icons/Link'
import LocationOnIcon from 'material-ui-icons/LocationOn'

import {isNumber} from '../lib/util.js'

class ContactDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {expanded: false}
    this.toggleExpand = this.toggleExpand.bind(this)
  }

  toggleExpand () {
    this.setState({ expanded: !this.state.expanded })
  }

  componentDidMount () {
    let id = isNumber(this.props.match.params.id) ? this.props.match.params.id : 1
    this.props.actions.getContact(id).catch(e => console.log(e))
  }

  getFullName () {
    return this.props.contact ? this.props.contact.first_name + ' ' + this.props.contact.last_name : ''
  }

  getFullJobDesc () {
    return this.props.contact ? this.props.contact.job_title + ' @ ' + this.props.contact.company : ''
  }

  render () {
    if (!this.props.contact) {
      return null
    }

    return (
      <article className='contact-details'>
        <Card>
          <div className='contact-header'>
            <CardHeader
              avatar={
                <Avatar aria-label={this.getFullName()} style={{backgroundColor: this.props.theme.palette.secondary.main}}>
                  {this.props.contact.first_name.charAt(0)}
                </Avatar>
              }
              action={
                <IconButton>
                  <ModeEditIcon />
                </IconButton>
              }
              title={this.getFullName()}
              className='contact-header-info'
            />
          </div>
          <CardContent>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary={this.getFullJobDesc()} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={this.props.contact.email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary={this.props.contact.phone} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary={this.props.contact.website} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary={this.props.contact.address} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <NoteIcon />
                </ListItemIcon>
                <ListItemText primary={this.props.contact.notes} />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </article>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({getContact, updateContact}, dispatch)
})

const mapStateToProps = state => ({
  contact: state.contacts[0]
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(ContactDetails))
