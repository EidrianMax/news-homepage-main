const navbarToggler = document.querySelector('.navbar__toggler')
const offCanvas = document.querySelector('.offcanvas')
const navbarClose = document.querySelector('.navbar__close')

navbarToggler.addEventListener('click', () => {
  offCanvas.classList.toggle('d-none')
})

navbarClose.addEventListener('click', () => {
  offCanvas.classList.toggle('d-none')
})
