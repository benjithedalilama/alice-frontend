import { authHeader } from '../helpers/authHelper'
import { handleResponse } from '../helpers/responseHelper'

const url = 'http://localhost:8080/api'

class UserService {
  static async login(username, password){
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users/login`, requestOptions)
      handleResponse(response)
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
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
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

  static async register(username, password) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users`, requestOptions)
      handleResponse(response)
      return response
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
        body: JSON.stringify({ user }),
        credentials: 'include'
      }

      const updatedUser = await fetch(`${url}/users/${user._id}`, requestOptions)
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
        headers: authHeader(),
        credentials: 'include'
      }

      await fetch(`${url}/users/${id}`, requestOptions)
    }
    catch (err) {
      throw err
    }
  }
}


export default UserService
