import React from 'react'
import List from 'material-ui/List'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Project from './Project'
import AlertDialog from './AlertDialog.js'
import { getProjects, deleteProject } from '../actions/ActionCreators'

import '../css/Projects.css'

class Projects extends React.Component {
  constructor (props) {
    super(props)

    this.deleteProject = this.deleteProject.bind(this)
    this.closeAlertDialog = this.closeAlertDialog.bind(this)
    this.openAlertDialog = this.openAlertDialog.bind(this)

    this.state = {
      deletionProjectID: 0,
      alertDialog: {
        open: false,
        title: 'Delete Project',
        content: 'Are you sure you want to delete project?',
        disagree: {text: 'cancel', handle: this.closeAlertDialog},
        agree: {text: 'delete', handle: this.deleteProject}
      }
    }
  }

  componentDidMount () {
    this.props.actions.getProjects().catch(e => console.log(e))
  }

  closeAlertDialog () {
    this.setState(prevState => ({
      alertDialog: {...prevState.alertDialog, ...{open: false}}
    }))
  }

  openAlertDialog (projectID = 0) {
    this.setState(prevState => ({
      alertDialog: {...prevState.alertDialog, ...{open: true}},
      deletionProjectID: projectID
    }))
  }

  deleteProject () {
    this.closeAlertDialog()
    this.props.actions.deleteProject(this.state.deletionProjectID).catch(e => console.log(e))
  }

  render () {
    let projects = ''

    if (this.props.projects.length > 0) {
      projects = this.props.projects.map((project, index) => {
          // let date = !isNaN(new Date(data.timestamp)) ? moment(new Date(data.timestamp)).format('DD/MM/YYYY') : 'No date provided'
        return <Project {...project} key={index} className='project' deleteHandle={this.openAlertDialog} />
      })
    }

    return (
      <div>
        <AlertDialog {...this.state.alertDialog} />
        <List dense className='projects'>
          {projects}
        </List>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getProjects, deleteProject }, dispatch)
})

const mapStateToProps = state => ({
  projects: state.projects
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
