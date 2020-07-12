// My answer
const arr = N => {
    const arr = [];

    for (let i = 0; i < N; i += 1) {
        arr.push(i);
    }

    return arr;
};



// Other answer
const arr = n => Array.from({
    length: n
}, (_, i) => i);