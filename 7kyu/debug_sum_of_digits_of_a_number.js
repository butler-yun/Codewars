// My answer
function getSumOfDigits(integer) {
    const numString = integer.toString();
    let sum = 0;
    for (i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    return sum;
}

// Orther answer
function getSumOfDigits(integer) {
    return Array.from(String(integer), Number).reduce((a, b) => a + b)
}