// My answer
const reverseSeq = n => {
    const result = [];

    for (let i = n; i > 0; i -= 1) {
        result.push(i);
    }

    return result;
};



// Orther answer
// No.1
const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i);
};