// My answer
function noBoringZeros(n) {
    const numStr = String(n).split('');
    // your code

    if (n === 0) {
        return 0;
    }

    for (let i = numStr.length - 1; i >= 0; i -= 1) {

        if (numStr[i] !== '0') {
            return +(numStr.slice(0, i + 1).join(''));
        }
    }
}



// Other answer
// No.1
function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
        n = n / 10
    }
    return n
}



// No.2
function noBoringZeros(n) {
    return +`${n}`.replace(/0*$/, "");
}