import React from 'react'
import Contact from '../components/Contact'
import newList from '../components/ListHOC'
import newListPage from '../components/ListPageHOC'
import NewContact from '../components/NewContact'
import newDialog from '../components/NewDialogHOC'
import { addContact, getContacts, deleteContact } from '../actions/ActionCreators'

import '../css/Contacts.css'

const data = {
  first_name: '',
  last_name: '',
  company: '',
  job_title: '',
  email: '',
  phone: '',
  notes: ''
}
const NewContactDialog = newDialog(NewContact, data)
const Contacts = newList(Contact, 'contacts', {getList: getContacts, deleteItem: deleteContact}, {title: 'Delete Contact', content: 'Are you sure you want to delete contact?'})
const ContactsListPage = newListPage(Contacts, NewContactDialog, {addItem: addContact})

export default class ContactsPage extends React.Component {
  render () {
    return (
      <ContactsListPage />
    )
  }
}
