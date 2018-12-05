import { getCookie } from '../helpers/cookieHelper'
import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  DELETE_USER_BEGIN,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from '../actions/userActions'

let user = getCookie('user')

const initialState = user ? {
  loggedIn: true,
  user,
  loading: false,
  error: null
} : {
  loggedIn: false,
  user: {},
  loading: false,
  error: null
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: null,
        user: action.payload.user
      }

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: {}
      }

    case REGISTER_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload.user
      }

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: {}
      }

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: null
      }

    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    case DELETE_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: {}
      }

    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: {}
      }

    default:
      return state
  }
}
