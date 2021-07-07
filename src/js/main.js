(function () {
  const doc = document
  const rootEl = doc.documentElement
  const body = doc.body
  /* global ScrollReveal */
  const sr = window.sr = ScrollReveal()

  rootEl.classList.remove('no-js')
  rootEl.classList.add('js')

  window.addEventListener('load', function () {
    body.classList.add('is-loaded')

    var currentIndex = 0
    const slide = document.getElementById('slide')
    startLoop()

    // slideshow
    function startLoop() {
      var imageNumber = currentIndex + 1;
      // var ext = imageNumber === 1 ? '.jpg' : '.png';
      var time = imageNumber === 1 ? 4000 : 3500;
      slide.src = 'dist/images/screen ' + imageNumber + '.png';
      if (currentIndex === 2) {
        currentIndex = 0
      } else {
        currentIndex += 1
      }
      setTimeout(() => {
        startLoop()
      }, time)
    }
  })

  // Reveal animations
  function revealAnimations() {
    sr.reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }
  if (body.classList.contains('has-animations')) {
    window.addEventListener('load', revealAnimations)
  }
}())
