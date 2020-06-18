// My answer
function capitalize(s) {
    const word = s.split('');
    const result = word.map(funcMap).join('');
    const result2 = word.map(funcMap2).join('');

    return [result, result2]
};

function funcMap(x, y) {
    if (y % 2 === 0) {
        return x.toUpperCase();
    } else {
        return x.toLowerCase();
    }
};

function funcMap2(x, y) {
    if (y % 2 !== 0) {
        return x.toUpperCase();
    } else {
        return x.toLowerCase();
    }
};


// Other answer 1
function capitalize(s) {
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};



// Other answer 2
function capitalize(s) {
    return [0, 1].map(r => [...s].map((c, i) => i % 2 === r ? c.toUpperCase() : c).join(''));
};



// Other answer 3
function capitalize(s) {
    const S = s.toUpperCase()
    let a = ""
    let b = ""
    for (let i = 0; i < s.length; ++i) {
        if (i & 1) {
            a += s[i]
            b += S[i]
        } else {
            a += S[i]
            b += s[i]
        }
    }
    return [a, b]
}