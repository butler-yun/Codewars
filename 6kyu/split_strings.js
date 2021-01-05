// My answer
function solution(str) {
    const re = /\w{1,2}/g;
    const matchStr = str.match(re);

    if (str.length === 0) {
        return [];
    }

    const result = matchStr.map((elm) => {
        return elm.length % 2 ? elm + '_' : elm;
    });

    return result;
}


// Other answer
// No.1
function solution(str) {
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
        str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i + 1]);
        i += 2;
    }
    return result;
}



// No.2
function solution(s) {
    return (s + "_").match(/.{2}/g) || []
}



// No.3
function solution(str) {
    arr = [];
    for (var i = 0; i < str.length; i += 2) {
        second = str[i + 1] || '_';
        arr.push(str[i] + second);
    }
    return arr;
}


// No.4
function solution(str) {
    str.length % 2 && (str += "_");
    return str.match(/.{1,2}/g) || [];
}