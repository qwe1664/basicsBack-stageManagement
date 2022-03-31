let tokenkey = 'token'


export function setToken(token) {
  return sessionStorage.setItem(tokenkey, token)
}

export function getToken() {
  return sessionStorage.getItem(tokenkey)
}

export function removeToken() {
  return sessionStorage.removeItem(tokenkey)
}