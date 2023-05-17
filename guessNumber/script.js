'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guessingNumber = Number(document.querySelector('.number-input').value);

    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!';

    } else if (guessingNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = 'Верно!';
        document.querySelector('.question').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'rgb(24, 143, 30)';
        document.querySelector('.question').style.width = '50rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            
            document.querySelector('.guess-message').textContent = 
                guessingNumber < secretNumber ? 'Ваше число меньше загаданного' : 'Ваше число больше загаданного'; 
        } else {
            document.querySelector('.guess-message').textContent = 'Game over!';
            document.querySelector('.score').textContent = 0;
        }     
    }
});

document.querySelector(".again").addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.question').textContent = '???';
    document.querySelector('.guess-message').textContent = 'Начни угадывать!';
    document.querySelector('.number-input').value = '';
    document.querySelector('.score').textContent = 20;
});