function isAuthenticated() {
  return localStorage.getItem('token') !== null;
}

export { isAuthenticated }