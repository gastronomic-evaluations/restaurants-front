function isAuthenticated() {
  return localStorage.getItem('token') !== null;
}

function logout() {
  localStorage.setItem('token', null);
}

function getToken() {
  return localStorage.getItem('token')
}

export { isAuthenticated, logout, getToken }