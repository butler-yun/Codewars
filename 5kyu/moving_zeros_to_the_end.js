// My answer
var moveZeros = function (arr) {
    // TODO: Program me
    const zeros = arr.filter((elm) => elm === 0).length;
    const result = arr.filter((elm) => elm !== 0);

    for (let i = 0; i < zeros; i += 1) {
        result.push(0);
    }

    return result;
}


// Other answer
// No.1
var moveZeros = function (arr) {
    return arr.filter(function (x) {
        return x !== 0
    }).concat(arr.filter(function (x) {
        return x === 0;
    }));
}




// No.2
var moveZeros = function (arr) {
    var result = arr.filter(function (num) {
        return num !== 0;
    });
    var zeros = arr.filter(function (num) {
        return num === 0;
    });
    return result.concat(zeros);
}