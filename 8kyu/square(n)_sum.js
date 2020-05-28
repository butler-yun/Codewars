// My answer
function squareSum(numbers) {
    return numbers.map((num) => Math.pow(num, 2)).reduce((x, y) => x + y, 0);
}


// Other answer
// No.1
function squareSum(numbers) {
    return numbers.reduce(function (sum, n) {
        return (n * n) + sum;
    }, 0)
}


// No.2
function squareSum(numbers) {
    var sum = 0;
    numbers.forEach(function (n) {
        sum += n * n
    });
    return sum;
}