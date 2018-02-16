import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Note from './Note'
import { getNotes, editNote } from '../actions/ActionCreators'

class Notes extends React.Component {
  contructor () {
    this.editNote = this.editNote.bind(this)
  }

  componentDidMount () {
    this.props.actions.getNotes().catch(e => console.log(e))
  }

  editNote (note) {
    this.props.actions.editNote(note)
  }

  render () {
    let notes = ''

    if (this.props.notes.length > 0) {
      notes = this.props.notes.map((note, index) => {
        return <Note {...note} key={index} className='note' editNote={() => this.editNote({...note})} />
      })
    }

    return (
      <div className='notes'>{notes}</div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getNotes, editNote }, dispatch)
})

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
