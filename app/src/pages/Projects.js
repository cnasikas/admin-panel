import React from 'react'
import NewProject from '../components/NewProject'
import Project from '../components/Project'
import newDialog from '../components/NewDialogHOC'
import newList from '../components/ListHOC'
import newListPage from '../components/ListPageHOC'
import { addProject, getProjects, deleteProject } from '../actions/ActionCreators'

const data = {title: '',
  url: '',
  notes: '',
  completed: false
}

const NewProjectDialog = newDialog(NewProject, data)
const Projects = newList(Project, 'projects', {getList: getProjects, deleteItem: deleteProject}, {title: 'Delete Project', content: 'Are you sure you want to delete project?'})
const ProjectsListPage = newListPage(Projects, NewProjectDialog, {addItem: addProject})

export default class ProjectsPage extends React.Component {
  render () {
    return (
      <ProjectsListPage />
    )
  }
}
