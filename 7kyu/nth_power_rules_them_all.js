// My answer
function modifiedSum(a, n) {
    const powNum = a.map((x) => Math.pow(x, n));
    const reducer = (x, y) => x + y;

    return powNum.reduce(reducer) - a.reduce(reducer);
}


// Other answer 1
const modifiedSum = (arr, exp) =>
    arr.reduce((a, b) => a + Math.pow(b, exp) - b, 0);


// Other answer 2
const sum = xs => xs.reduce((a, b) => a + b, 0);
const modifiedSum = (a, n) => sum(a.map(x => Math.pow(x, n))) - sum(a);


// Other answer 3
function modifiedSum(a, n) {
    var s = 0;
    for (var i = 0; i < a.length; ++i)
        s += Math.pow(a[i], n) - a[i];
    return s;
}