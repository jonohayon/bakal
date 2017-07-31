const rand = n => Math.floor(Math.random() * n)

const showElement = (el, i) => {
  return new Promise(resolve => {
    const n = rand(10)
    setTimeout(() => {
      el.style.display = 'inline'
      return resolve()
    }, 1100 + n + ((i + 1) * 100))
  })
}

const generateCoords = el => {
  setInterval(() => {
    const x = rand(window.innerWidth) / rand(2)
    const y = rand(window.innerHeight - 100) / rand(2)
    el.style.left = `${x}px`
    el.style.top = `${y}px`
    el.style.transform = `scale(${Math.random() * 2}) rotate(${rand(90) - 45}deg)`
  }, 45)
}

const flyOverScreen = el => {
  return new Promise(resolve => {
    setTimeout(() => {
      el.style.position = 'absolute'
      el.style.display = 'block'
      generateCoords(el)
      return resolve()
    }, 5000)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const els = Array.from(document.querySelectorAll('.l'))
    const actions = els.map(showElement)
    const flyovers = els.map(flyOverScreen)
    Promise.all(actions).then(() =>
      Promise.all(flyovers)
    )
  }, 16000)
})
