import { combineReducers } from 'redux'
import projects from './projects'
import notes from './notes'
import modals from './modals'
import payments from './payments'
import credentials from './credentials'
import contacts from './contacts'

export default combineReducers({
  projects,
  notes,
  modals,
  payments,
  credentials,
  contacts
})
