const $tooltips = document.querySelector('.tooltips')

$tooltips.forEach($tooltip)
$tooltip.addEventListener('mouseover', event => {
  const { top, bottom, left, right } = $tooltip.getBoundingClientRect()
  if (top > 20) {
    event.target.classList.remove('bottom', 'left', 'right')
    event.target.classList.add('top')
  } else if (right > 120) {
    event.target.classList.remove('bottom', 'left', 'top')
    event.target.classList.add('right')
  } else if (left > 120) {
    event.target.classList.remove('bottom', 'right', 'top')
    event.target.classList.add('left')
  } else if (bottom > 20) {
    event.target.classList.remove('left', 'right', 'top')
    event.target.classList.add('bottom')
  }
})

console.log(`${top} px from the top of the window`)
console.log(`${window.innerHeight - bottom}px from the bottom of the window`)
console.log(`${left}px from the left of the window`)
console.log(`${window.innerWidth - right} from the right of the window`)
