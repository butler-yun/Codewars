// My answer
function sumFibs(n) {
    // you are the golden ratio.
    let fibArr = [];
    let temp = 0;
    let cur = 1;
    let last = 0;

    for (let i = 0; i <= n; i += 1) {
        fibArr.push(last);
        temp = cur;
        cur = last;
        last = temp + cur;
    }

    const evenArr = fibArr.filter((elm) => elm % 2 === 0);

    return evenArr.reduce((x, y) => x + y);
};