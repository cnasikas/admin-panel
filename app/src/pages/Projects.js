import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Projects from '../components/Projects'
import AddButton from '../components/AddButton'
import NewProject from '../components/NewProject'
import newDialog from '../components/NewDialogHOC'
import { addProject } from '../actions/ActionCreators'

const data = {title: '',
  url: '',
  notes: '',
  completed: false
}

const NewProjectDialog = newDialog(NewProject, data)

class ProjectsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {newPrDialog: false}

    this.openProjectDialog = this.openProjectDialog.bind(this)
    this.closeProjectDialog = this.closeProjectDialog.bind(this)
    this.addProject = this.addProject.bind(this)
  }

  openProjectDialog () {
    this.setState(prevState => ({
      newPrDialog: true
    }))
  }

  closeProjectDialog () {
    this.setState(prevState => ({
      newPrDialog: false
    }))
  }

  addProject (project) {
    this.props.actions.addProject(project).then((value) => { this.closeProjectDialog() })
  }

  render () {
    return (
      <div>
        <Projects />
        <AddButton clickHandler={this.openProjectDialog} />
        <NewProjectDialog open={this.state.newPrDialog} handleCancel={this.closeProjectDialog} handleSubmit={this.addProject} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addProject }, dispatch)
})

export default connect(null, mapDispatchToProps)(ProjectsPage)
