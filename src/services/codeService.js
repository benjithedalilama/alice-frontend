import { authHeader } from '../helpers/authHelper'
import { getCookie } from '../helpers/cookieHelper'

const url = 'http://localhost:8080/api'

class CodeService {
  static async getAll(hubId) {
    try {
      const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs/${hubId}/codes`, requestOptions)
      const parsed = await response.json()
      return parsed.codes
    }
    catch (err) {
      throw err
    }
  }

  static async getById(hubId, id) {
    try {
      const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include'
      }
      const hub = await fetch(`${url}/users/${getCookie('userId')}/hubs/${hubId}/codes/${id}`, requestOptions)
      return hub
    }
    catch (err) {
      throw err
    }
  }

  static async create(hubId, code) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs/${hubId}/codes`, requestOptions)
      return response
    }
    catch (err) {
      throw err
    }
  }

  static async update(hubId, code) {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
        credentials: 'include'
      }

      const updatedCode = await fetch(`${url}/users/${getCookie('userId')}/hubs/${hubId}/codes/${code.id}`, requestOptions)
      return updatedCode
    }
    catch (err) {
      throw err
    }
  }

  static async _delete(hubId, id) {
    try {
      const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
        credentials: 'include'
      }

      await fetch(`${url}/${getCookie('userId')}/hubs/${hubId}/codes/${id}`, requestOptions)
    }
    catch (err) {
      throw err
    }
  }
}


export default CodeService
