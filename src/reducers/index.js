import { combineReducers } from 'redux'
import hub from './hubReducer.js'
import user from './userReducer.js'

export default combineReducers({
  hub,
  user
})
