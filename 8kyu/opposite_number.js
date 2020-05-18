// My answer
function opposite(number) {
    return Math.sign(number) < 0 ? Math.abs(number) : -Math.abs(number);
    // Returns 1 if the number is positive and -1 if it is negative.
}

// Orther answer
// No.1
function opposite(number) {
    return number > 0 ? -number : Math.abs(number);
}

// No.2
function opposite(number) {
    return (-number);
}