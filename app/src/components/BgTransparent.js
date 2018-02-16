import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { closeNote } from '../actions/ActionCreators'

class BgTransparent extends React.Component {
  constructor () {
    super()
    this.closeModals = this.closeModals.bind(this)
    this.closeNote = this.closeNote.bind(this)
  }

  closeModals () {
    this.closeNote()
  }

  closeNote () {
    this.props.actions.closeNote()
  }

  render () {
    let classes = classNames('bg-transparent', {
      active: this.props.editNote.open
    })

    return (
      <div className={classes} onClick={this.closeModals} />
    )
  }
}

const mapStateToProps = state => ({
  editNote: state.modals.editNote
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ closeNote }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BgTransparent)
