// My answer
function evenBinary(n) {
    //Goodluck, Have Fun!
    const even = n.split(' ').filter((elm) => elm % 2 === 0).sort();
    const result = n.split(' ');

    return result.map((odd) => odd % 2 !== 0 ? odd : even.shift()).join(' ');
}



// Other answer
function evenBinary(n) {
    var even = (n.match(/\d\d0/g) || []).sort(),
        i = 0
    return n.replace(/\d\d0/g, x => even[i++])
}