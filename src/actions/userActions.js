import UserService from '../services/userService'
import { handleErrors } from '../helpers/responseHelper'
import { push } from 'connected-react-router'

export const LOGIN_USER_BEGIN   = 'LOGIN_USER_BEGIN'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

export const LOGOUT_USER_BEGIN = 'LOGOUT_USER_BEGIN'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'

export const REGISTER_USER_BEGIN = 'REGISTER_USER_BEGIN'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'

export const DELETE_USER_BEGIN = 'DELETE_USER_BEGIN'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

export const UPDATE_USER_BEGIN = 'UPDATE_USER_BEGIN'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'

export const loginUserBegin = user => ({
  type: LOGIN_USER_BEGIN,
  payload: { user }
})

export const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  payload: { user }
})

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: { error }
})

export const login = (username, password) => {
  return async dispatch => {
    dispatch(loginUserBegin())

    try {
      const user = await UserService.login(username, password)
      dispatch(loginUserSuccess(user))
      dispatch(push('/hubs'))
      return user
    }
    catch (err) {
      dispatch(loginUserFailure(err))
      handleErrors(err)
    }
  }
}

export const logoutUserBegin = () => ({
  type: LOGOUT_USER_BEGIN,
  payload: {}
})

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
  payload: {}
})

export const logoutUserFailure = error => ({
  type: LOGOUT_USER_FAILURE,
  payload: { error }
})

export const logout = () => {
  return async dispatch => {
    dispatch(logoutUserBegin)

    try {
      await UserService.logout()
      dispatch(logoutUserSuccess())
      return {}
    }
    catch (err) {
      dispatch(logoutUserFailure())
      handleErrors(err)
    }
  }
}

export const registerUserBegin = user => ({
  type: REGISTER_USER_BEGIN,
  payload: { user }
})

export const registerUserSuccess = user => ({
  type: REGISTER_USER_SUCCESS,
  payload: { user }
})

export const registerUserFailure = error => ({
  type: REGISTER_USER_FAILURE,
  payload: { error }
})

export const register = user => {
  return async dispatch => {
    dispatch(registerUserBegin(user))

    try {
      await UserService.register(user)
      dispatch(registerUserSuccess(user))
      dispatch(push('/login'))
      return user
    }
    catch (err) {
      dispatch(registerUserFailure(err))
      handleErrors(err)
    }
  }
}

export const deleteUserBegin = id => ({
  type: DELETE_USER_BEGIN,
  payload: { id }
})

export const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS,
  payload: {}
})

export const deleteUserFailure = error => ({
  type: DELETE_USER_FAILURE,
  payload: { error }
})

export const _delete = id => {
  return async dispatch => {
    dispatch(deleteUserBegin(id))

    try {
      await UserService._delete(id)
      dispatch(deleteUserSuccess())
    }
    catch (err) {
      dispatch(deleteUserFailure(err))
      handleErrors(err)
    }
  }
}

export const updateUserBegin = user => ({
  type: UPDATE_USER_BEGIN,
  payload: { user }
})

export const updateUserSuccess = user => ({
  type: UPDATE_USER_SUCCESS,
  payload: { user }
})

export const updateUserFailure = error => ({
  type: UPDATE_USER_FAILURE,
  payload: { error }
})

export const update = user => {
  return async dispatch => {
    dispatch(updateUserBegin(user))

    try {
      await UserService.update(user)
      dispatch(updateUserSuccess(user))
    }
    catch (err) {
      dispatch(updateUserFailure(err))
      handleErrors(err)
    }
  }
}
