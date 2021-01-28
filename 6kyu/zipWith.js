// My answer
function zipWith(fn, a0, a1) {
    const leng = Math.min(a0.length, a1.length);
    const result = [];

    for (let i = 0; i < leng; i += 1) {
        result.push(fn(a0[i], a1[i]));
    }

    return result;
}




// Other answer
// No.1
function zipWith(fn, a0, a1) {
    return Array.from({
        length: Math.min(a0.length, a1.length)
    }, (_, i) => fn(a0[i], a1[i]));
}