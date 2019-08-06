function isAuthenticated() {
  return localStorage.getItem('token') !== null;
}

function logout() {
  localStorage.setItem('token', null);
}

export { isAuthenticated, logout }