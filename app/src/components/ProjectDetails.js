import React from 'react'
import moment from 'moment'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { getProject, getCredentials, getPayments, updateProject, updatePayment,
  updateCredential, addCredential, addPayment, deletePayment, deleteCredential
} from '../actions/ActionCreators'
import Credentials from './Credentials.js'
import Payments from './Payments.js'
import EditProject from './EditProject.js'
import EditCredential from './EditCredential.js'
import EditPayment from './EditPayment.js'
import AddCredential from './AddCredential.js'
import AddPayment from './AddPayment.js'

import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import DoneIcon from 'material-ui-icons/Done'
import PaymentIcon from 'material-ui-icons/Payment'
import ReceiptIcon from 'material-ui-icons/Receipt'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import AccessTimeIcon from 'material-ui-icons/AccessTime'
import EuroSymbolIcon from 'material-ui-icons/EuroSymbol'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import IconButton from 'material-ui/IconButton'
import LocalAtmIcon from 'material-ui-icons/LocalAtm'
import LockIcon from 'material-ui-icons/Lock'
import List, {
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui/List'

class ProjectDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editDialog: false,
      editCredDialog: false,
      editPaymentDialog: false,
      editCred: {},
      editPayment: {},
      addPaymentDialog: false,
      addCredentialDialog: false
    }

    this.openDialog = this.openDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.editProject = this.editProject.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.add = this.add.bind(this)
    this.submit = this.submit.bind(this)
    this.submitNew = this.submitNew.bind(this)
  }

  componentDidMount () {
    let id = this.isNumber(this.props.match.params.id) ? this.props.match.params.id : 1
    this.props.actions.getProject(id).catch(e => console.log(e))
    this.props.actions.getCredentials(id).catch(e => console.log(e))
    this.props.actions.getPayments(id).catch(e => console.log(e))
  }

  updateProject (updates = {}) {
    let project = {...this.props.project, ...updates}
    project['currency'] = 'EUR' // fixed temporary
    this.props.actions.updateProject(project.id, project).catch(e => console.log(e))
  }

  update (action = 'updateCredential', updates = {}) {
    this.props.actions[action](updates.id, this.props.project.id, updates).catch(e => console.log(e))
  }

  delete (action = 'deleteCredential', id) {
    this.props.actions[action](id, this.props.project.id).catch(e => console.log(e))
  }

  add (action = 'addCredential', obj = {}) {
    this.props.actions[action](obj, this.props.project.id).catch(e => console.log(e))
  }

  isNumber (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  hasPayments () {
    return this.props.payments && this.props.payments.length > 0
  }

  hasCredentials () {
    return this.props.credentials && this.props.credentials.length > 0
  }

  openDialog (id) {
    this.setState(prevState => ({
      [id]: true
    }))
  }

  closeDialog (id) {
    this.setState(prevState => ({
      [id]: false
    }))
  }

  editProject (project) {
    this.updateProject(project)
    this.closeDialog('editDialog')
  }

  editItem (editKey = 'editCred', itemKey = 'credentials', dialogKey = 'editCredDialog', id) {
    this.setState(prevState => ({
      [editKey]: this.getItem(itemKey, id)
    }))
    this.openDialog(dialogKey)
  }

  submit (key, value, dialogKey, action) {
    this.setState(prevState => ({
      [key]: value
    }))
    this.update(action, value)
    this.closeDialog(dialogKey)
  }

  submitNew (obj, action, dialogKey) {
    this.add(action, obj)
    this.closeDialog(dialogKey)
  }

  getItem (key = 'credentials', id = 0) {
    return this.props[key].filter((item) => { return item.id === id })[0]
  }

  getEditObj (key = 'editCred') {
    return this.state[key]
  }

  render () {
    if (!this.props.project) {
      return null
    }

    let payments = null
    let credentials = null
    let editCredDialog = null
    let editPayment = null
    let addPaymentDialog = null
    let addCredentialDialog = null

    if (this.hasPayments()) {
      payments = <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Payments</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Payments payments={this.props.payments} editHandle={(id) => this.editItem('editPayment', 'payments', 'editPaymentDialog', id)} deleteHandle={(id) => this.delete('deletePayment', id)} />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      editPayment = <EditPayment open={this.state.editPaymentDialog} handleCancel={() => { this.closeDialog('editPaymentDialog') }} handleSubmit={this.submit} payment={this.getEditObj('editPayment')} />
    }

    if (this.hasCredentials()) {
      credentials = <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Credentials</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Credentials credentials={this.props.credentials} editHandle={(id) => this.editItem('editCred', 'credentials', 'editCredDialog', id)} deleteHandle={(id) => this.delete('deleteCredential', id)} />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      editCredDialog = <EditCredential open={this.state.editCredDialog} handleCancel={() => { this.closeDialog('editCredDialog') }} handleSubmit={this.submit} credential={this.getEditObj('editCred')} />
    }

    addCredentialDialog = <AddCredential open={this.state.addCredentialDialog} handleCancel={() => { this.closeDialog('addCredentialDialog') }} handleSubmit={this.submitNew} />
    addPaymentDialog = <AddPayment open={this.state.addPaymentDialog} handleCancel={() => { this.closeDialog('addPaymentDialog') }} handleSubmit={this.submitNew} />

    return (
      <div>
        <EditProject open={this.state.editDialog} handleCancel={() => { this.closeDialog('editDialog') }} handleSubmit={this.editProject} project={this.props.project} />
        {editCredDialog}
        {editPayment}
        {addCredentialDialog}
        {addPaymentDialog}
        <article className='project-details'>
          <Card>
            <div className='project-header'>
              <CardHeader
                avatar={
                  <Avatar aria-label={this.props.project.title}>
                    {this.props.project.title.charAt(0)}
                  </Avatar>
              }
                title={this.props.project.title}
                subheader={this.props.project.url}
                className='project-header-info'
              />
              <List className='project-header-list'>
                <ListItem>
                  <ListItemIcon>
                    <AccessTimeIcon />
                  </ListItemIcon>
                  <ListItemText primary={this.props.project.hours} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EuroSymbolIcon />
                  </ListItemIcon>
                  <ListItemText primary={this.props.project.amount} />
                </ListItem>
              </List>
            </div>
            <CardContent>
              <Typography component='p'>
                {this.props.project.notes}
              </Typography>
            </CardContent>
            <CardActions disableActionSpacing>
              <IconButton aria-label='Mark completed' className={classnames({'active': this.props.project.completed})}
                onClick={() => this.updateProject({completed: !this.props.project.completed, completed_at: moment().format('YYYY-MM-DD HH:mm:ss')})}>
                <DoneIcon />
              </IconButton>
              <IconButton aria-label='Mark paid' className={classnames({'active': this.props.project.paid})} onClick={() => this.updateProject({paid: !this.props.project.paid})}>
                <PaymentIcon />
              </IconButton>
              <IconButton aria-label='Mark receipt' className={classnames({'active': this.props.project.receipt})} onClick={() => this.updateProject({receipt: !this.props.project.receipt})}>
                <ReceiptIcon />
              </IconButton>
              <div className='flex-grow' />
              <IconButton aria-label='Add credential' onClick={() => { this.openDialog('addCredentialDialog') }}>
                <LockIcon />
              </IconButton>
              <IconButton aria-label='Add payment' onClick={() => { this.openDialog('addPaymentDialog') }}>
                <LocalAtmIcon />
              </IconButton>
              <IconButton aria-label='Edit' onClick={() => { this.openDialog('editDialog') }}>
                <ModeEditIcon />
              </IconButton>
            </CardActions>
          </Card>
          {credentials}
          {payments}
        </article>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({getProject, updateProject, updatePayment, updateCredential, addCredential, addPayment, getCredentials, getPayments, deletePayment, deleteCredential}, dispatch)
})

const mapStateToProps = state => ({
  project: state.projects[0],
  payments: state.payments,
  credentials: state.credentials
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
