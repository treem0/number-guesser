
const compareNumbers = (guess, correctNumber) => {
    
    if (guess === correctNumber) return 0;
    else if (guess > correctNumber) return 1;
    else if (guess < correctNumber) return -1;

};
export default compareNumbers;
