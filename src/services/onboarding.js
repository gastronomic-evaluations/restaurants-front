function isNewuser() {
  return !localStorage.getItem('onboard')
}

function setOnboarding() {
  localStorage.setItem('onboard', true);
}

export {
  isNewuser,
  setOnboarding,
}