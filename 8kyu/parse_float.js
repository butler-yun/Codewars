// My answer
function parseF(s) {

    if (typeof s === 'boolean' || typeof s === 'undefined') {
        return null;
    } else if (isNaN(Number(s))) {
        return null;
    } else {
        return Number(s);
    }
}

// Other answer
function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
}