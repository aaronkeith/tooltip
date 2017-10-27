const $button = document.querySelectorAll('.button')

$button.forEach(el => {
  const xCoord = el.getBoundingClientRect().x
  const yCoord = el.getBoundingClientRect().y
  const intViewportWidth = window.innerWidth
  el.addEventListener('mouseenter', event => {
    const { top, bottom, left, right } = el.getBoundingClientRect()
     if(yCoord > 40 && xCoord > 120 && (intViewportWidth - xCoord > 255) ) {
      event.target.classList.remove('tooltip-bottom', 'tooltip-left', 'tooltip-right')
      event.target.classList.add('tooltip-top')
      console.log('top');
    }
    else if ((yCoord > 20) && (intViewportWidth - xCoord) > 250)  {
      event.target.classList.remove('tooltip-bottom', 'tooltip-left', 'tooltip-top')
      event.target.classList.add('tooltip-right')
      console.log('right');
    }
    else if
    (yCoord > 20 && (intViewportWidth - xCoord) < 250) {
      event.target.classList.remove('tooltip-bottom', 'tooltip-right', 'tooltip-top')
      event.target.classList.add('tooltip-left')
      console.log('left');
    }
    else if
    (yCoord <= 0 && (intViewportWidth - xCoord) > 50) {
      event.target.classList.remove('tooltip-left', 'tooltip-right', 'tooltip-top')
      event.target.classList.add('tooltip-bottom')
      console.log('bottom');
    }
  })
})
