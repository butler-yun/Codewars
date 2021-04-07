// My Answer
function invert(array) {
    return array.map((elm) => {
        return elm >= 0 ? -Math.abs(elm) : Math.abs(elm);
    });
}




// Other answer 1
function invert(array) {
    return array.map((elm) => elm === 0 ? elm : -elm);
}