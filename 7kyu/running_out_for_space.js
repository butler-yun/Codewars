// My answer
function spacey(array) {

    const arr = [];
    let arrStr = '';

    for (let i = 0; i <= array.length - 1; i += 1) {
        arrStr += array[i];
        arr.push(arrStr);
    }

    return arr;
}




// Other answer
// No.1
function spacey(array) {
    let str = ''
    return array.map(el => str += el)
}