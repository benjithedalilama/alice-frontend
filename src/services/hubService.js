import { authHeader } from '../helpers/authHelper'
import { getCookie } from '../helpers/cookieHelper'

const url = 'http://localhost:8080/api'

class HubService {
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
      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs/${id}`, requestOptions)
      const parsed = await response.json()
      return parsed.hub
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
        body: JSON.stringify(hub),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs`, requestOptions)
      const parsed = await response.json()
      return parsed.hub
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

      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs/${hub._id}`, requestOptions)
      const parsed = await response.json()
      return parsed.hub
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

      await fetch(`${url}/${getCookie('userId')}/hubs/${id}`, requestOptions)
    }
    catch (err) {
      throw err
    }
  }
}


export default HubService
