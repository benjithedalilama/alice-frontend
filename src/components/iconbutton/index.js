import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class IconButton extends Component {
  constructor(props) {
    super(props)
    this.iconType = {}
    switch (props.type) {
      case 'delete':
        this.iconType = ['far', 'trash-alt']
        break
      case 'edit':
        this.iconType = ['far', 'edit']
        break
      case 'play':
        this.iconType = ['fas', 'play']
        break
      case 'stop':
        this.iconType = ['fas', 'stop']
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
