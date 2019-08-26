function isAuthenticated() {
  return getToken() !== null;
}

function logout() {
  localStorage.setItem('token', null);
}

function getToken() {
  return localStorage.getItem('token')
}

function setLogin(response) {
  if( !response.hasOwnProperty('token') ) return false

  window.localStorage.setItem('token', response.token)
  window.location = '/#/restaurants'
}

export {
  isAuthenticated,
  logout,
  getToken,
  setLogin
}