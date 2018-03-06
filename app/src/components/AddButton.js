import React from 'react'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { Link } from 'react-router-dom'

export default class AddButton extends React.Component {
  render () {
    let addBtn = null

    if (this.props.link) {
      addBtn = <Button component={Link} variant='fab' color='secondary' aria-label='add' to={this.props.to}>
        <AddIcon />
      </Button>
    } else {
      addBtn = <Button variant='fab' color='secondary' aria-label='add' onClick={this.props.clickHandler}>
        <AddIcon />
      </Button>
    }

    return (
      <div className='add-btn'>
        {addBtn}
      </div>
    )
  }
}
