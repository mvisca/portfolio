// select modal-btn,modal-overlay,close-btn

const modalOpenBtn = document.querySelector('.modal-btn');
const modalOvelay = document.querySelector('.modal-overlay');
const modalContainer = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.close-btn');
const navWraper = document.querySelector('.nav-wraper');

const modalCloseFunc = () => {
  modalOvelay.classList.remove('open-modal');
};

function modalOpenFunc(e) {
  e.preventDefault();
  modalContainer.style["top"] = `${navWraper.offsetHeight}px`;
  modalOvelay.classList.add('open-modal');
};

// listen for click events on modal-btn and close-btn
modalOpenBtn.addEventListener('click', modalOpenFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);
