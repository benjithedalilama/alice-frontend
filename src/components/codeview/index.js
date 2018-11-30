import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHub } from '../../actions/hubActions'
import Code from '../code'
import List from '../list'
import Command from '../command'

export class CodeView extends Component {
  componentDidMount() {
    const { hubId } = this.props.match.params
    this.props.dispatch(fetchHub(hubId))
  }

  render() {
    let code

    const { codes } = this.props.hub
    code = !code ?
      codes[0] :
      codes.find(code => code.id === parseInt(this.props.match.params.codeId, 10))

    return (
      <div className='list__container'>
        <div className='list'>
          <Code code={code}>
            <div className='list__text--main'>{code.name}</div>
          </Code>
          <div className='sublist__container'>
            <List className='list__container'>
              <div className='list__itemContainer'>
                <div className='list__item'>
                  <div className='list__item__top list__text--main'>Commands</div>
                </div>
              </div>
              {code.commands.map(command =>
                <Command command={command} />
              )}
            </List>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hub: state.hub.item,
  loading: state.hub.loading,
  error: state.hub.error
})

export default connect(
  mapStateToProps
)(CodeView)
