import { handleErrors } from '../helpers/responseHelper'
import { push } from 'connected-react-router'
import CodeService from '../services/codeService'
export const ADD_CODE_BEGIN = 'ADD_CODE_BEGIN'
export const ADD_CODE_SUCCESS = 'ADD_CODE_SUCCESS'
export const ADD_CODE_FAILURE = 'ADD_CODE_FAILURE'
export const DELETE_CODE_BEGIN   = 'DELETE_CODE_BEGIN'
export const DELETE_CODE_SUCCESS = 'DELETE_CODE_SUCCESS'
export const DELETE_CODE_FAILURE = 'DELETE_CODE_FAILURE'

export const deleteCodeBegin = () => ({
  type: DELETE_CODE_BEGIN
})

export const deleteCodeSuccess = (hubId, id) => ({
  type: DELETE_CODE_SUCCESS,
  payload: { hubId, id }
})

export const deleteCodeFailure = error => ({
  type: DELETE_CODE_FAILURE,
  payload: { error }
})

export const deleteCode = (hubId, id) => {
  return async dispatch => {
    dispatch(deleteCodeBegin())

    try {
      await CodeService._delete(hubId, id)
      dispatch(push(`/hubs/${hubId}`))
      dispatch(deleteCodeSuccess(hubId, id))
      return {}
    }
    catch (err) {
      dispatch(deleteCodeFailure(err))
      handleErrors(err)
    }
  }
}

export const addCodeBegin = () => ({
  type: ADD_CODE_BEGIN
})

export const addCodeSuccess = (code) => ({
  type: ADD_CODE_SUCCESS,
  payload: { code }
})

export const addCodeFailure = error => ({
  type: ADD_CODE_FAILURE,
  payload: { error }
})

export const addCode = (hubId, name, action) => {
  return async dispatch => {
    dispatch(addCodeBegin())

    try {
      if (!name || !action) throw Error('Please enter all fields')

      const code = await CodeService.create(hubId, {name, action})
      dispatch(addCodeSuccess(code))
      dispatch(push(`/hubs/${hubId}`))
      return code
    }
    catch (err) {
      dispatch(addCodeFailure(err))
      handleErrors(err)
    }
  }
}
