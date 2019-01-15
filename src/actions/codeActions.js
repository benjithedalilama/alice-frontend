import { handleErrors } from '../helpers/responseHelper'
import CodeService from '../services/codeService'
export const FETCH_CODE_BEGIN   = 'FETCH_CODE_BEGIN'
export const FETCH_CODE_SUCCESS = 'FETCH_CODE_SUCCESS'
export const FETCH_CODE_FAILURE = 'FETCH_CODE_FAILURE'

export const fetchCodeBegin = () => ({
  type: FETCH_CODE_BEGIN
})

export const fetchCodeSuccess = code => ({
  type: FETCH_CODE_SUCCESS,
  payload: { code }
})

export const fetchCodeFailure = error => ({
  type: FETCH_CODE_FAILURE,
  payload: { error }
})

export const fetchCode = (hubId, id) => {
  return async dispatch => {
    dispatch(fetchCodeBegin())

    try {
      const code = await CodeService.getById(hubId, id)
      dispatch(fetchCodeSuccess(code))
      return code
    }
    catch (err) {
      dispatch(fetchCodeFailure(err))
      handleErrors(err)
    }
  }
}
