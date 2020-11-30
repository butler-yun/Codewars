// My answer
function oddOrEven(array) {
    //enter code here
    let sum = 0;

    if (array.length !== 0) {
        sum = array.reduce((x, y) => x + y);
        return sum % 2 === 0 ? 'even' : 'odd';

    } else {
        return 'even';
    }
}

// Other answer
// No.1
function oddOrEven(arr) {
    return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}