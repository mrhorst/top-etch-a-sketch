/* Grab container using javascript, add flexbox and wrap prop */
const container = document.getElementById('cont')
container.style = 'display: flex; flex-wrap: wrap; '

/** Set default resolution at 16 pixels */
let nSquares = 16

/** Create Button for changing the number of squares (pixels)
 *  and add it to the body, but before the main container
 */
const btnNumSquares = document.createElement('button')
const body = document.body
body.insertBefore(btnNumSquares, container)

/** Add classes, text content, and margin to the button just added */
btnNumSquares.className = 'btn btn-outline-primary btn-lg'
btnNumSquares.textContent = 'Change Resolution'
btnNumSquares.style = 'margin: 10px auto'

/** Create a populateContainer function to populate squares (pixels) inside container */
const populateContainer = (s) => {
  const populate = document.querySelectorAll('.square')
  populate.forEach((t) => {
    t.remove()
  })
  for (let i = 0; i < s * s; i++) {
    let createDiv = document.createElement('div')
    createDiv.className = 'square'
    container.appendChild(createDiv)
  }
}

/** Change resolution and rerenders */
const changeRes = (size) => {
  if (size < 0) {
    alert('Size cannot be smaller than 0!')
  } else if (size > 64) {
    alert('Size cannot be bigger than 64!')
  } else {
    nSquares = size
    populateContainer(size)
    renderSquare()
  }
}

/** prompts for resolution on click */
btnNumSquares.onclick = () => {
  changeRes(prompt('What resolution would you like to set the canvas at?'))
}

const rand = (n) => {
  return Math.floor(Math.random() * n) + 1
}

/** Create renderSquare function to change props of the squares/pixels after clicking button */
const renderSquare = () => {
  const square = document.querySelectorAll('.square')
  square.forEach((tile) => {
    let counter = 10
    tile.style = `width: ${500 / nSquares}px; height: ${500 / nSquares}px`
    tile.addEventListener('mouseover', (e) => {
      console.log(e.target.style.backgroundColor)
      counter--
      e.target.style.backgroundColor = `rgb(${(255 * counter) / 10},${
        (255 * counter) / 10
      },${(255 * counter) / 10})`
    })
  })
}

/** Initialize first state running populate/render functions */
populateContainer(nSquares)
renderSquare()
