import React from 'react'
import _ from 'lodash'

export default class ContentEditable extends React.Component {
  constructor () {
    super()
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.emitChange = this.emitChange.bind(this)
  }

  render () {
    return <div className='content-editable'
      onInput={this.emitChange}
      onBlur={this.emitChange}
      contentEditable
      dangerouslySetInnerHTML={{__html: _.escape(this.props.html)}}
      ref={(div) => { this.node = div }} />
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.html !== this.node.innerHTML
  }

  componentDidUpdate () {
    if (this.props.html !== this.node.innerHTML) {
      this.node.innerHTML = this.props.html
    }
  }

  emitChange () {
    var html = this.node.innerHTML
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          value: html
        }
      })
    }
    this.lastHtml = html
  }
}
