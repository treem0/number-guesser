import compareNumbers from './compare-numbers.js';

const guess = document.getElementById('guess');
const correctNumber = 7;
const triesRemainingStart = document.getElementById('tries-remaining');
const low = document.getElementById('low');
const lose = document.getElementById('lose');
const playGame = document.getElementById('result-button');
const win = document.getElementById('win');
const high = document.getElementById('high');
let triesRemaining = 4;

playGame.addEventListener('click', () => {
    const numberGuess = parseInt(guess.value);
    triesRemaining--;
    triesRemainingStart.textContent = triesRemaining;
    const result = compareNumbers(numberGuess, correctNumber);
    
    if (result === 0 && triesRemaining > 0) {
        win.classList.remove('hidden');
        high.classList.add('hidden');
        playGame.disabled = true;
        triesRemainingStart.textContent = triesRemaining;
    } else if (result === 1 && triesRemaining > 0) {
        high.classList.remove('hidden');
        low.classList.add('hidden');
        triesRemainingStart.textContent = triesRemaining;
    } else if (result === -1 && triesRemaining > 0) {
        low.classList.remove('hidden');
        high.classList.add('hidden');
        triesRemainingStart.textContent = triesRemaining;
    } else {
        lose.classList.remove('hidden');
        high.classList.add('hidden');
        low.classList.add('hidden');
        playGame.disabled = true;
    } 
});
