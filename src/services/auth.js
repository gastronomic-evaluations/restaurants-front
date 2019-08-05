function isAuthenticate() {
  const token = window.localStorage.getItem('token')
  return token && token.length > 0
}

export { isAuthenticate }