import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddButton from '../components/AddButton'

export default function newListPage (ListComponent, DialogComponent, actions) {
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...actions }, dispatch)
  })

  class NewListPage extends React.Component {
    constructor (props) {
      super(props)
      this.state = {openDialog: false}

      this.openDialog = this.openDialog.bind(this)
      this.closeDialog = this.closeDialog.bind(this)
      this.addItem = this.addItem.bind(this)
    }

    openDialog () {
      this.setState(prevState => ({
        openDialog: true
      }))
    }

    closeDialog () {
      this.setState(prevState => ({
        openDialog: false
      }))
    }

    addItem (project) {
      this.props.actions.addItem(project).then((value) => { this.closeDialog() })
    }

    render () {
      return (
        <div>
          <ListComponent />
          <AddButton clickHandler={this.openDialog} />
          <DialogComponent open={this.state.openDialog} handleCancel={this.closeDialog} handleSubmit={this.addItem} />
        </div>
      )
    }
  }

  return connect(null, mapDispatchToProps)(NewListPage)
}
