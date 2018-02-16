import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import ProjectsPage from '../pages/Projects'
import ProjectDetails from './ProjectDetails'

export default class Main extends React.Component {
  render () {
    return (
      <main className='app-main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/project' component={ProjectsPage} />
          <Route exact path='/project/:id' component={ProjectDetails} />
        </Switch>
      </main>
    )
  }
}
