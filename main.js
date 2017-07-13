const showElement = (el, i) => {
  return new Promise(resolve => {
    const n = Math.floor(Math.random() * 10)
    setTimeout(() => {
      el.style.display = 'inline'
      return resolve()
    }, 1100 + n + ((i + 1) * 100))
  })
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const els = Array.from(document.querySelectorAll('.l'))
    const actions = els.map(showElement)
    Promise.all(actions)
  }, 3000)
})