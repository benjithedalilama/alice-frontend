import React, { Component } from 'react'
import IconButton from '../iconbutton'
import { connect } from 'react-redux'
import { deleteHub } from '../../actions/hubActions'

export class Hub extends Component {

  handleDelete(id) {
    this.props.dispatch(deleteHub(id))
  }

  render () {
    const { hub, children } = this.props

    // This is terrible. Fix it.
    const date = new Date(hub.createdAt)
    const dateString = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`

    return (
      <div className='list__itemContainer' key={hub._id}>
        <div className='list__item'>
          <div className='list__item__top'>
            <div className='list__text'>
              {children}
              <div className='list__text--alt'>{hub._id}</div>
            </div>
            <div className='list__buttons' onClick={() => this.handleDelete(hub._id)}>
              <IconButton className='list__button' id={hub._id} type='delete' onClick={() => this.handleDelete(hub._id)}/>
              <IconButton className='list__button' id={hub._id} type='edit'/>
              <IconButton className='list__button' id={hub._id} type='play'/>
              <IconButton className='list__button' id={hub._id} type='stop'/>
            </div>
          </div>
          <div className='list__item__bottom'>
            <div className='list__text list__text--main'>
              <div>Sensors: {hub.sensors.length}</div>
            </div>
            <div className='list__text list__text--main'>
            <div>Created at {dateString}</div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.hub.error
})

export default connect(
  mapStateToProps
)(Hub)
