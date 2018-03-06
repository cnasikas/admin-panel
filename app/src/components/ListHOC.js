import React from 'react'
import List from 'material-ui/List'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AlertDialog from './AlertDialog.js'

import '../css/Projects.css'

export default function newList (ListComponent, key, actions, dialog) {
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({...actions}, dispatch)
  })

  const mapStateToProps = state => ({
    [key]: state[key]
  })

  class NewList extends React.Component {
    constructor (props) {
      super(props)

      this.deleteItem = this.deleteItem.bind(this)
      this.closeAlertDialog = this.closeAlertDialog.bind(this)
      this.openAlertDialog = this.openAlertDialog.bind(this)

      this.state = {
        deletionItemID: 0,
        alertDialog: {
          open: false,
          title: dialog.title,
          content: dialog.content,
          disagree: {text: 'cancel', handle: this.closeAlertDialog},
          agree: {text: 'delete', handle: this.deleteItem}
        }
      }
    }

    componentDidMount () {
      this.props.actions.getList().catch(e => console.log(e))
    }

    closeAlertDialog () {
      this.setState(prevState => ({
        alertDialog: {...prevState.alertDialog, ...{open: false}}
      }))
    }

    openAlertDialog (itemID = 0) {
      this.setState(prevState => ({
        alertDialog: {...prevState.alertDialog, ...{open: true}},
        deletionItemID: itemID
      }))
    }

    deleteItem () {
      this.closeAlertDialog()
      this.props.actions.deleteItem(this.state.deletionItemID).catch(e => console.log(e))
    }

    render () {
      let items = ''
      if (this.props[key] && this.props[key].length > 0) {
        items = this.props[key].map((item, index) => {
          // let date = !isNaN(new Date(data.timestamp)) ? moment(new Date(data.timestamp)).format('DD/MM/YYYY') : 'No date provided'
          return <ListComponent {...item} key={index} className={key + 'item'} deleteHandle={this.openAlertDialog} />
        })
      }

      return (
        <div>
          <AlertDialog {...this.state.alertDialog} />
          <List dense className={key}>
            {items}
          </List>
        </div>
      )
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(NewList)
}
