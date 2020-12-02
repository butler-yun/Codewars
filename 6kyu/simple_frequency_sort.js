// My answer
function solve(arr) {

    const frequency =
        arr.reduce((x, y) => {
            x[y] = (x[y] || 0) + 1;
            return x;
        }, {});

    return [...arr].sort((a, b) => {
        return frequency[b] - frequency[a] || a - b;
    });
}




// Other answer
// No.1
function solve(arr) {
    var r = {}
    for (var n of arr) r[n] = r[n] + 1 || 1
    return arr.slice().sort((a, b) => r[b] - r[a] || a - b)
}


// No.2
const _ = require('lodash');

function solve(xs) {
    return _.orderBy(xs, [_.propertyOf(_.countBy(xs)), _.identity], ['desc', 'asc']);
}




// No.3
function solve(arr) {
    let dict = new Map()
    for (let x of arr) {
        dict.set(x, (dict.get(x) || 0) + 1)
    }
    return arr.sort((x, y) => {
        let n = dict.get(x)
        let m = dict.get(y)
        return n === m ? x - y : m - n
    })
}



// No.4
function solve(arr) {

    return arr.map(elem => [elem, arr.filter(num => num == elem).length])
        .sort((a, b) => b[1] - a[1] || a[0] - b[0])
        .map(x => x[0])
}