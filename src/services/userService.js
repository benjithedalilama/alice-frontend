import authHeader from '../helpers/authHelper'

export const login = async (username, password) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      }
      const user = await fetch(`api/users/login`, requestOptions)
      return user
    }
    catch (err) {
      throw err
    }
}

export const logout = async () => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }
    await fetch(`api/users/logout`, requestOptions)
    return {}
  }
  catch (err) {
    throw err
  }
}

export const getById = async id => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: authHeader()
    }
    const user = await fetch(`api/users/${id}`, requestOptions).then(handleResponse)
    return user
  }
  catch (err) {
    throw err
  }
}

export const register = async user => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }
    const user = await fetch(`api/users`, requestOptions)
    return user
  }
  catch (err) {
    throw err
  }
}

export const update = async user => {
  try {
    const requestOptions = {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }

    const user = await fetch(`api/users/${user.id}`, requestOptions)
    return user
  }
  catch (err) {
    throw err
  }
}

export const _delete = async id => {
  try {
    const requestOptions = {
      method: 'DELETE',
      headers: authHeader()
    }

    await fetch(`api/users/${id}`, requestOptions)
  }
  catch (err) {
    throw err
  }
}
