function closeModal(modal) {
  const closeBtns = document.querySelectorAll('.js-closeModal');

  const handleCloseModal = (evt) => {
    evt.preventDefault();

    removeClassModal(modal);
  };

  closeBtns?.forEach((btn) => {
    btn.addEventListener('click', handleCloseModal);
  });
}

function removeClassModal(modal) {
  body.classList.remove('modal-open');
  modal?.classList.remove('modal--show');
  modalOverlay?.classList.remove('modal-overlay--show');
}

closeModal(modalSuccess);
