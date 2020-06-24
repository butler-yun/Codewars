// My answer
function strCount(str, letter) {
    //code here
    return str.split('').filter((x) => letter === x).length;
}


// Other answer
// No.1
function strCount(str, letter) {
    return str.split(letter).length - 1
}