// My answer
function sumMix(x) {
    return x.reduce((x, y) => Number(x) + Number(y), 0);
}



// Other answer
// No.1
function sumMix(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}


// No.2
function sumMix(x) {
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}


// No.3
function sumMix(x) {
    return x.reduce((s, x) => s + +x, 0);
}