// My answer
function partsSums(ls) {
    // your code
    let sum = ls.reduce((x, y) => x + y, 0);
    let resultArr = [];
    let x = 0;

    if (ls.length === 0) {
        return [0];
    }

    for (let i = 0; i <= ls.length; i += 1) {
        resultArr.push(sum);
        x = ls[i];
        sum -= x;
    }

    return resultArr;
}




// Other answer
// No.1
function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}





// No.2
function partsSums(ls) {
    let res = new Array(ls.length + 1);
    res[ls.length] = 0;

    for (let i = ls.length - 1; i >= 0; i--)
        res[i] = res[i + 1] + ls[i];

    return res;

}





// No.3
function partsSums(ls) {
    var result = [];
    result.push(ls.reduce((a, b) => a + b, 0));
    for (i = 0; i < ls.length; i++) {
        result.push((result[result.length - 1]) - ls[i]);
    };
    return result
}