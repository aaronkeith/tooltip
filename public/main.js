const $button = document.querySelectorAll('.button')
const intViewportHeight = window.innerHeight
const intViewportWidth = window.innerWidth

$button.forEach(el => {
  const xCoord = el.getBoundingClientRect().x
  const yCoord = el.getBoundingClientRect().y
  console.log(xCoord)
  console.log(yCoord)
  el.addEventListener('mouseenter', event => {
    const { top, bottom, left, right } = el.getBoundingClientRect()
     if(xCoord ) {
      event.target.classList.remove('bottom', 'left', 'right')
      event.target.classList.add('top')
      console.log(yCoord)
    }
    else if (right > 150 || top < 30) {
      event.target.classList.remove('bottom', 'left', 'top')
      event.target.classList.add('right')
    }
    else if
    (left > 150 || top < 30) {
      event.target.classList.remove('bottom', 'right', 'top')
      event.target.classList.add('left')
    }
    else if
    (bottom > 20) {
      event.target.classList.remove('left', 'right', 'top')
      event.target.classList.add('bottom')
    }
  })
})
