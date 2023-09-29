const closeModal = (target) => {
  const modal = document.getElementById(target)

  modal.classList.remove('show', 'd-block')
  modal.style = 'display: none'
  modal.setAttribute('aria-hidden', 'true')
  modal.removeAttribute('role')
  modal.removeAttribute('aria-modal')

  document
    .querySelectorAll('.modal-open')
    .forEach((el) => el.classList.remove('modal-open'))
  document
    .querySelectorAll('.modal-backdrop')
    .forEach((el) => el.remove())
}

export default closeModal
