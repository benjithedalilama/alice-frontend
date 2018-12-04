import getCookie from './cookieHelper'

export function authHeader() {
    let user = JSON.parse(getCookie('user'))
    let token = JSON.parse(getCookie('token'))

    if (user && token) {
        return { 'Authorization': 'Bearer ' + token }
    } else {
        return {}
    }
}
