'use strict';


function changePlayer() {
    players[currentPlayerNumber].classList.remove('player--active');
    currentPlayerNumber = currentPlayerNumber === 0 ? 1 : 0;
    players[currentPlayerNumber].classList.add('player--active');
}

function resetCurrentScore() {
    playersCurrentScores[0] = 0;
    playersCurrentScores[1] = 0;
    playerCurrentScoreboard[currentPlayerNumber].textContent = playersCurrentScores[currentPlayerNumber];
}

function recordVictory() {
    players[currentPlayerNumber].classList.remove('player--active');
    players[currentPlayerNumber].classList.add('player--winner');
        
    btnRoll.disabled = true;
    btnHold.disabled = true;
}


const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const playerCurrentScoreboard = document.querySelectorAll('.current-score');
const btnHold = document.querySelector('.btn--hold');
const playerScoreboard = document.querySelectorAll('.score');
const btnNewGame = document.querySelector('.btn--new');
const players = document.querySelectorAll('.player');


let playersCurrentScores = [0, 0];
let playersScores = [0, 0];
let currentPlayerNumber = 0;

btnRoll.addEventListener('click', () => {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;

    dice.setAttribute('src', `./sprites/dice${randomNumber}.png`);

    if (randomNumber !== 1) {
        playersCurrentScores[currentPlayerNumber] += randomNumber;
        playerCurrentScoreboard[currentPlayerNumber].textContent = playersCurrentScores[currentPlayerNumber];
    } else {
        resetCurrentScore();
        changePlayer();
    }
});

btnHold.addEventListener('click', () => {
    playersScores[currentPlayerNumber] += playersCurrentScores[currentPlayerNumber];
    playerScoreboard[currentPlayerNumber].textContent = playersScores[currentPlayerNumber];

    resetCurrentScore();

    if (playerScoreboard[currentPlayerNumber].textContent >= 100) {
        recordVictory();
    } else {
        changePlayer();
    }
});

btnNewGame.addEventListener('click', () => {
    location.reload();
})