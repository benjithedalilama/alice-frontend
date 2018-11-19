import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './profilepreview.css'

const ProfilePreview = props => (
  <div className={props.className + ' profilePreview'}>
    <p className="profilePreview__text">USER.EMAIL</p>
    <img className="profilePreview__image" src="https://lh3.googleusercontent.com/--SUy6eYwjwU/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-jKi24cBTO8NdPN3lLZeA2nUDGQ6g/s48-c-mo/photo.jpg" alt="Profile" />
  </div>
)

const mapStateToProps = ({ counter }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePreview)
