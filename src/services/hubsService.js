import { authHeader } from '../helpers/authHelper'
// import { handleResponse } from '../helpers/responseHelper'
import { getCookie } from '../helpers/cookieHelper'

const url = 'http://localhost:8080/api'

class HubsService {
  static async getAll() {
    try {
      const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs`, requestOptions)
      const parsed = await response.json()
      return parsed.hubs
    }
    catch (err) {
      throw err
    }
  }

  static async getById(id) {
    try {
      const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include'
      }
      const hub = await fetch(`${url}/users/${getCookie('userId')}/hubs/${id}`, requestOptions)
      return hub
    }
    catch (err) {
      throw err
    }
  }

  static async create(hub) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hub }),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs`, requestOptions)
      return response
    }
    catch (err) {
      throw err
    }
  }

  static async update(hub) {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ hub }),
        credentials: 'include'
      }

      const updatedUser = await fetch(`${url}/users/${getCookie('userId')}/${hub.id}`, requestOptions)
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


export default HubsService
