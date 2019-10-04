import compareNumbers from './compare-numbers.js';

const guess = document.getElementById('user-guess');
const correctNumber = Math.round(Math.random() * 20) + 1;
const triesRemainingStart = document.getElementById('tries-remaining');
const low = document.getElementById('answer-low');
const lose = document.getElementById('user-lose');
const playGame = document.getElementById('get-result-button');
const win = document.getElementById('user-win');
const high = document.getElementById('answer-high');
let triesRemaining = 4;

function userWin() {
    win.classList.remove('hidden');
    high.classList.add('hidden');
    playGame.disabled = true;
    triesRemainingStart.textContent = triesRemaining;
}

function answerHigh() {
    high.classList.remove('hidden');
    low.classList.add('hidden');
    triesRemainingStart.textContent = triesRemaining;
}

function answerLow() {
    low.classList.remove('hidden');
    high.classList.add('hidden');
    triesRemainingStart.textContent = triesRemaining;
}

function userLose() {
    lose.classList.remove('hidden');
    high.classList.add('hidden');
    low.classList.add('hidden');
    playGame.disabled = true;
}

function getResult() {
    const numberGuess = parseInt(guess.value);
    const result = compareNumbers(numberGuess, correctNumber);
    if (result === 0 && triesRemaining > 0) {
        userWin();
    } else if (result === 1 && triesRemaining > 0) {
        answerHigh();
    } else if (result === -1 && triesRemaining > 0) {
        answerLow();
    } else {
        userLose();
    } 
}

playGame.addEventListener('click', () => {
    triesRemaining--;
    triesRemainingStart.textContent = triesRemaining;
    getResult();
});
