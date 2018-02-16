import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { editNote, updateNote, closeNote } from '../actions/ActionCreators'
import Notes from '../components/Notes'
import EditNote from '../components/EditNote'
import '../css/Layout.css'
import '../css/Notes.css'

class Home extends React.Component {
  constructor () {
    super()
    this.updateNote = this.updateNote.bind(this)
  }

  updateNote (note) {
    this.props.actions.updateNote(note)
    this.props.actions.closeNote()
  }

  render () {
    return (
      <div className='notes-wrapper'>
        <Notes />
        <EditNote open={this.props.editNote.open} {...this.props.editNote.note} updateNote={this.updateNote} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  editNote: state.modals.editNote
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ editNote, updateNote, closeNote }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
