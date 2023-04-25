const modal = document.querySelector('#modal');
const imgProposal = document.querySelector('#img_proposal');
const imgModalClose = document.querySelector('#img_modal_close');

imgProposal.addEventListener('click',toogleModal);
imgModalClose.addEventListener('click',closeModal);

function toogleModal() {
    modal.classList.add('modal_show');
};

function closeModal() {
    modal.classList.remove('modal_show');
};