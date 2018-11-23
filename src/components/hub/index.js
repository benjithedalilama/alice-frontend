import React, { Component } from 'react'
import { connect } from 'react-redux'
import IconButton from '../iconbutton'

export class Hub extends Component {
  render() {
    const { hub } = this.props.location
    const sensors = hub.sensors
    const controlCodes = hub.controlCodes

    return (
      <div>
        <div className='listContainer'>
          <div className='list'>
            <div className='list__itemContainer' key={hub.id}>
              <div className='list__item'>
                <div className='list__item__top'>
                  <div className='list__text'>
                    <div className='list__text--main'>{hub.name}</div>
                    <div className='list__text--alt'>{hub.id}</div>
                  </div>
                  <div className='list__buttons'>
                    <IconButton className='list__button' id={hub.id} type='delete'/>
                    <IconButton className='list__button' id={hub.id} type='edit'/>
                    <IconButton className='list__button' id={hub.id} type='play'/>
                    <IconButton className='list__button' id={hub.id} type='stop'/>
                  </div>
                </div>
                <div className='list__item__bottom'>
                  <div className='list__text list__text--main'>
                    <div>Sensors: {hub.sensors.length}</div>
                  </div>
                  <div className='list__text list__text--main'>
                    <div>Created at {hub.createdAt}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps
)(Hub)
