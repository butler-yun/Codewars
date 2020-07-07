// My answer
function roundToNext5(n) {
    return Math.ceil(n / 5) * 5;
}


// Other answer
// No.1
function roundToNext5(n) {
    while (n % 5 !== 0) n++;
    return n;
}