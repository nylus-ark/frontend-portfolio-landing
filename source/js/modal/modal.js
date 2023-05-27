function closeModal() {
  const modalSuccess = document.querySelector('.modal-success');
  const closeBtns = document.querySelectorAll('.js-closeModal');

  const handleCloseModal = (evt) => {
    evt.preventDefault();

    body.classList.remove('modal-open');
    modalSuccess?.classList.remove('modal--show');
    modalOverlay?.classList.remove('modal-overlay--show');
  };

  closeBtns?.forEach((btn) => {
    btn.addEventListener('click', handleCloseModal);
  });
}

closeModal();
