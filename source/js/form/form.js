const subscribeForm = document.forms.subscribeForm;

const modalSuccess = document.querySelector('.modal-success');
const modalOverlay = document.querySelector('.modal-overlay');
const modalText = modalSuccess?.querySelector('.modal-text');

const body = document.body;

function sendForm(form, modal) {
  const handleForm = (evt) => {
    evt.preventDefault();

    const data = new FormData(form);
    const dataEntries = data?.entries();
    const inputs = [];

    [...dataEntries]?.forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
      inputs.push({ [key]: value });
    });

    if (modalText) {
      modalText.innerText = `Your data has been successfully sent to ${inputs[0].email}`;
    }

    body.classList.add('modal-open');
    modal?.classList.add('modal--show');
    modalOverlay?.classList.add('modal-overlay--show');

    setTimeout(() => {
      removeClassModal(modal);
    }, 5000);
  };

  form?.addEventListener('submit', handleForm);
}

sendForm(subscribeForm, modalSuccess);
