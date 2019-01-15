import { combineReducers } from 'redux'
import hub from './hubReducer.js'
import user from './userReducer.js'
import code from './codeReducer.js'

export default combineReducers({
  hub,
  code,
  user
})
