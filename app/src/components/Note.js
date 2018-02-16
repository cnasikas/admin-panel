import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import PaletteIcon from 'material-ui-icons/Palette'
import DeleteIcon from 'material-ui-icons/Delete'

export default class Note extends React.Component {
  render () {
    return (
      <div className='note-wrapper' onClick={this.props.editNote}>
        <Card className='note' elevation={4}>
          <div className='note-content-wrapper'>
            <CardContent className='note-content' aria-multiline='true' role='textbox' contentEditable='false'>
              {this.props.content}
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
            </CardActions>
          </div>
        </Card>
      </div>
    )
  }
}
