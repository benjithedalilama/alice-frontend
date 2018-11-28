import { combineReducers } from 'redux'
import hubs from './hubsReducer.js'
import hub from './hubReducer.js'

export default combineReducers({
  hubs,
  hub
})
