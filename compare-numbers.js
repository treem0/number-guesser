
const compareNumbers = (userNumber, correctNumber) => {
    if (userNumber === correctNumber) return 0;
    else if (userNumber > correctNumber) return 1;
    else if (userNumber < correctNumber) return -1;

};

export default compareNumbers;