// My answer
function uglifyWord(s) {
    // your code here
    const splitStr = s.split(/(\s|\d|-|[~!@#$%^&*()_+|<>?:{}])/);
    let result = '';

    for (let i = 0; i < splitStr.length; i += 1) {

        for (let j = 0; j < splitStr[i].length; j += 1) {

            if (j % 2 === 0) {
                result += splitStr[i][j].toUpperCase();
            } else {
                result += splitStr[i][j].toLowerCase();
            }
        }
    }

    return result;
}

// Other answer
// No.1
function uglifyWord(s) {
    var ans = '';
    var b = true;
    for (var i = 0; i < s.length; ++i) {
        if (b)
            ans += s[i].toUpperCase();
        else
            ans += s[i].toLowerCase();
        if (s[i].toLowerCase() >= 'a' && s[i].toLowerCase() <= 'z')
            b = !b;
        else
            b = true;
    }
    return ans;
}



// No.2
function uglifyWord(s) {
    return s.replace(/[a-z]+/ig, x => x.split ``.map((y, i) => i % 2 ? y.toLowerCase() : y.toUpperCase()).join ``)
}



// No.3
function uglifyWord(s) {
    let flag = true
    return s.split('').map(char => {
        if (char.match(/[A-Z]/i)) {
            flag = !flag
            return flag ? char.toLowerCase() : char.toUpperCase()
        } else {
            flag = true
            return char
        }
    }).join('')
}