'use strict';

function showModalWindow() {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModalWindow() {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}


const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnShowModalWindow = document.querySelectorAll('.show-modal-window');


for (let i = 0; i < btnShowModalWindow.length; i++) {
    btnShowModalWindow[i].addEventListener('click', showModalWindow);
}

btnCloseModalWindow.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
        closeModalWindow()
    }
});