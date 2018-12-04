import { getCookie } from './cookieHelper'

export function authHeader() {
    let user = getCookie('user')
    let token = getCookie('token')

    if (user && token) {
        return { 'Authorization': 'Bearer ' + token }
    } else {
        return {}
    }
}
