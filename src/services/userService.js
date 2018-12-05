import { authHeader } from '../helpers/authHelper'
import { handleResponse } from '../helpers/responseHelper'

const url = 'http://localhost:8080/api'

class UserService {
  static async login(username, password){
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      }
      const response = await fetch(`${url}/users/login`, requestOptions)
      await handleResponse(response)
      return response
    }
    catch (err) {
      throw err
    }
  }

  static async logout() {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }
      await fetch(`${url}/users/logout`, requestOptions)
      return {}
    }
    catch (err) {
      throw err
    }
  }

  static async getById(id) {
    try {
      const requestOptions = {
        method: 'GET',
        headers: authHeader()
      }
      const user = await fetch(`${url}/users/${id}`, requestOptions)
      return user
    }
    catch (err) {
      throw err
    }
  }

  static async register(user) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      }
      const registeredUser = await fetch(`${url}/users`, requestOptions)
      return registeredUser
    }
    catch (err) {
      throw err
    }
  }

  static async update(user) {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      }

      const updatedUser = await fetch(`${url}/users/${user.id}`, requestOptions)
      return updatedUser
    }
    catch (err) {
      throw err
    }
  }

  static async _delete(id) {
    try {
      const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
      }

      await fetch(`${url}/users/${id}`, requestOptions)
    }
    catch (err) {
      throw err
    }
  }
}


export default UserService