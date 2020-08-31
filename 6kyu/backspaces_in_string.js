// My answer
function cleanString(s) {
    let str = s;
    for (let i = 0; i < s.length - 1; i += 1) {
        const idx = str.indexOf('#');
        const splitStr = str.split(str.slice(idx - 1, idx + 1)).join('');

        if (idx === 0) {
            str = str.substring(1, );

            if (str === '#') {
                return '';
            }

        } else {
            str = splitStr;
        }
    }

    return str;
};



// Other answer
// No.1
function clean_string(s) {
    const result = []
    for (const c of s) {
        if (c === "#") {
            result.pop()
        } else {
            result.push(c)
        }
    }
    return result.join("")
}



// No.2
function cleanString(s) {
    let result = [];
    [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));
    return result.join("");
}