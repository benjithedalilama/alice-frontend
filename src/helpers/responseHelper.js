import store from '../store'
import { logout } from '../actions/userActions'

export const handleErrors = response => {
  if (!response.ok) {
    return Error(response.statusText)
  }
  return response
}

export const handleResponse = response => {
  if (!response.ok) {
    switch (response.status) {
      case 401:
        throw Error('Authentication failed')
      case 404:
        throw Error('Authentication failed')
      default:
        throw Error(response.statusText)
    }
  }

  return response
}
