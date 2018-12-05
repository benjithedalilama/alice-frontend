import UserService from '../services/userService'

export const handleErrors = response => {
  if (!response.ok) {
    return Error(response.statusText)
  }
  return response
}

export const handleResponse = async response => {
  const text = await response.text()
  const data = text

  if (!response.ok) {
    if (response.status === 401) {
      UserService.logout()
    }

    const err = (data && data.message) || response.statusText
    throw Error(err)
  }

  return data
}
