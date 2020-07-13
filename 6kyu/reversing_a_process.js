// My answer
function decode(r) {
    // your code
    const dic = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25,
    };

    const word = r.replace(/[0-9]/g, '');
    const num = r.replace(/[a-z]/gi, '');

    let result = '';

    for (let idx = 0; idx <= word.length; idx += 1) {
        if (word[idx]) {
            for (let i = 0; i <= 25; i += 1) {
                if (dic[word[idx]] === i * num % 26) {
                    result += Object.keys(dic)[i];
                }
            }
        }
    };

    if (word.length === result.length) {
        return result;
    } else {
        return "Impossible to decode";
    }
}


// Other answer
// No.1
const startCharASCII = 97;
const letterCount = 26;

function decode(r) {
    var num = parseInt(r);
    var letters = [];
    var codes = [];
    for (var i = 0; i < letterCount; i++) {
        letters[i] = String.fromCharCode(startCharASCII + i);
        codes[i] = String.fromCharCode(i * num % letterCount + startCharASCII);
    }
    if (Array.from(new Set(codes)).length != letterCount) return 'Impossible to decode';
    return r.split(num)[1].split('').map((v, i, a) => letters[codes.indexOf(v)]).join('');
}


// No.2
function decode(r) {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const newArr = r.match(/(^\d*)(.*)/).slice(1);
    let newString = '';
    newArr[1]
    for (let j = 0; j < newArr[1].length; j++) {
        let orig = '';
        const each = newArr[1][j]
        for (let i = 0; i < alphabets.length; i++) {
            if (i * newArr[0] % 26 === alphabets.indexOf(each)) {
                if (orig !== '') {
                    return ("Impossible to decode");
                }
                orig = i;
                newString += alphabets[i];
            }
        }
    }
    return newString;
}