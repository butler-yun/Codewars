// My answer
var orderedCount = function (text) {
    // Implement me!
    const splitStr = text.split('');
    const str = [...new Set(splitStr)];

    let resultArr = [];

    for (let i = 0; i <= str.length - 1; i += 1) {
        resultArr.push([str[i], splitStr.filter((s) => s === str[i]).length]);
    }

    return resultArr;
}




// Other answer
// No.1
const orderedCount = s =>
    Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));




// No.2
var orderedCount = function (text) {
    var arr = [];
    for (var i = 0; i < text.length; ++i) {
        var k = 0;
        for (var j = 0; j < arr.length; ++j)
            if (arr[j][0] == text[i])
                k++;
        if (k == 0) {
            for (var j = i; j < text.length; ++j)
                if (text[j] == text[i])
                    k++;
            arr.push([text[i], k]);
        }
    }
    return arr;
}



// No.3
var orderedCount = function (text) {
    letters = text.split("")
    var uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index)

    return uniqs.map((letter) => [letter, text.split(letter).length - 1])
}