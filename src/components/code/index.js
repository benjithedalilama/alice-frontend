import React, { Component } from 'react'
import IconButton from '../iconbutton'
import { connect } from 'react-redux'
import { deleteCode } from '../../actions/hubActions'

export class Code extends Component {

  handleDelete(e, hubId, id) {
    e.preventDefault()
    this.props.dispatch(deleteCode(hubId, id))
  }

  render () {
    const { code, children, hubId } = this.props

    return (
      <div className='list__itemContainer' key={code._id}>
        <div className='list__item'>
          <div className='list__item__top'>
            <div className='list__text'>
              {children}
              <div className='list__text--alt'>{code._id}</div>
            </div>
            <div className='list__buttons'>
              <IconButton className='list__button' id={code._id} type='delete' onClick={(e) => this.handleDelete(e, hubId, code._id)}/>
              <IconButton className='list__button' id={code._id} type='edit'/>
            </div>
          </div>
          <div className='list__item__bottom'>
            <div className='list__text list__text--main'>
            </div>
            <div className='list__text list__text--main'>
              Created at {code.createdAt}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  error: state.hub.error,
  hubId: state.hub.item._id
})

export default connect(
  mapStateToProps
)(Code)
