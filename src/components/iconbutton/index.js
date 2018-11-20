import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

class IconButton extends Component {
  constructor(props) {
    super(props)
    this.iconType = {}
    switch (props.type) {
      case 'delete':
        this.iconType = faTrash
        break
      case 'edit':
        this.iconType = faPen
        break
      case 'play':
        this.iconType = faPlay
        break
      case 'stop':
        this.iconType = faStop
        break
      default:
        this.iconType = {}
    }
  }

  render () {
    return (
      <div className={this.props.className}>
        <FontAwesomeIcon icon={this.iconType} />
      </div>
    )
  }
}

export default IconButton
