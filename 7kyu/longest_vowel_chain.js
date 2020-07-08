// My answer
function solve(s) {
    const re = /[^aiueo]/;
    const word = s.split(re);

    return Math.max(...word.map((x) => x.length));
}


// Other answer
// No.1
function solve(s) {
    let cur = 0
    let max = 0
    for (let i = 0; i < s.length; ++i) {
        if ("aeiou".includes(s[i])) {
            cur++
            if (cur > max) {
                max = cur
            }
        } else {
            cur = 0
        }
    }
    return max
}



// No.2
function solve(s) {
    return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
}