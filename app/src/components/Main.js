import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import ProjectsPage from '../pages/Projects'
import ContactsPage from '../pages/Contacts'
import ProjectDetails from './ProjectDetails'
import ContactDetails from './ContactDetails'

export default class Main extends React.Component {
  render () {
    return (
      <main className='app-main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/project' component={ProjectsPage} />
          <Route exact path='/project/:id' component={ProjectDetails} />
          <Route exact path='/contact' component={ContactsPage} />
          <Route exact path='/contact/:id' component={ContactDetails} />
        </Switch>
      </main>
    )
  }
}
