// My answer
function stringBreakers(n, string) {
    const variableNum = `(\\w{${n}}|\\w{1,})`;
    const reg = new RegExp(variableNum, "g");
    const str = string.split(' ').join('');

    return str.match(reg).join('\n')
}





// Other answer
// No.1
function stringBreakers(n, s) {
    return s.replace(/\s/g, '').replace(new RegExp('.{' + n + '}', 'g'), '$&\n').trim()
}




// No.2
function stringBreakers(n, string) {
    let result = [];
    string = string.replace(/\s/g, "");

    for (let i = 0; i < string.length; i += n) {
        result.push(string.substr(i, n));
    }

    return result.join("\n");
}