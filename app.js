const userGuess = document.getElementById('guess');
const correctNumber = 7;

const numberGuess = parseInt(userGuess);
const compareNumbers = (userNumber, correctNumber) => {
    if (numberGuess === correctNumber) return 0;
    else if (numberGuess > correctNumber) return 1;
    else if (numberGuess < correctNumber) return -1;