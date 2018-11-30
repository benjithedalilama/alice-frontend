import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHub } from '../../actions/hubActions'
import Code from '../code'

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
