import { combineReducers } from 'redux'
import hubs from './hubsReducer.js'
import hub from './hubReducer.js'
import user from './userReducer.js'

export default combineReducers({
  hubs,
  hub,
  user
})
