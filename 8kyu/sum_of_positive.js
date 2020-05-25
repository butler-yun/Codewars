// My answer
function positiveSum(arr) {
    if (arr.length === 0 || arr[0] === undefined) {
        return 0;
    } else if (arr.filter((num) => Math.sign(num) > 0).length === 0) {
        return 0
    } else {
        return arr.filter((num) => Math.sign(num) >= 0).reduce((x, y) => x + y);
    }
}


// Orther answer
// No.1
function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        // setup loop to go through array of given length
        if (arr[i] > 0) {
            // if arr[i] is greater than zero
            total += arr[i];
            // add arr[i] to total
        }
    }
    return total;
    // return total
}


// No.2
function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}


// No.3
function positiveSum(arr) {
    return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
}