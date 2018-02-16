import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import PaletteIcon from 'material-ui-icons/Palette'
import DeleteIcon from 'material-ui-icons/Delete'
import classNames from 'classnames'
import ContentEditable from './ContentEditable'

export default class EditNote extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.updateNote = this.updateNote.bind(this)
    this.state = {html: ''}
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.content) {
      this.setState({html: nextProps.content})
    }
  }

  handleChange (event) {
    this.setState({
      html: event.target.value
    })
  }

  updateNote () {
    let {open, content, updateNote, ...note} = this.props
    note['content'] = this.state.html
    this.props.updateNote(note)
  }

  render () {
    let classes = classNames('note-wrapper', 'edit-note', {
      active: this.props.open
    })
    return (
      <div className={classes}>
        <Card className='note' elevation={4}>
          <div className='note-content-wrapper'>
            <CardContent className='note-content' aria-multiline='true' role='textbox'>
              <ContentEditable html={this.state.html} onChange={this.handleChange} />
            </CardContent>
          </div>
          <div className='note-actions-wrapper'>
            <CardActions className='note-actions'>
              <IconButton aria-label='Change Color' disableRipple>
                <PaletteIcon />
              </IconButton>
              <IconButton aria-label='Delete' disableRipple>
                <DeleteIcon />
              </IconButton>
              <Button onClick={this.updateNote}>Done</Button>
            </CardActions>
          </div>
        </Card>
      </div>
    )
  }
}
