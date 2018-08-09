export function setItem (key, value) {
  removeItem(key)
  window.localStorage.setItem(key, value)
}
export function getItem (key) {
  return window.localStorage.getItem(key)
}
export function removeItem (key) {
  window.localStorage.removeItem(key)
}
