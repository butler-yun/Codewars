// My answer
function printerError(s) {
    const dic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
    const splitString = s.split('');
    let error = 0;
    splitString.map((x) => dic.includes(x) === false ? error += 1 : error += 0);

    return `${error}/${s.length}`;
}


// Other answer
// No.1
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}


// No.2
function printerError(s) {
    // your code
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] > "m") {
            count++;
        }
    }
    return count + "/" + s.length;
}