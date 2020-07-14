// My answer
var encryptThis = function (text) {
    // Implement me! :)
    const splitString = text.split(' ');
    let result = '';
    for (let idx = 0; idx < splitString.length; idx += 1) {
        if (splitString[idx].indexOf(splitString[idx][0]) === 0) {
            result += ` ${splitString[idx].charCodeAt()}${splitString[idx].slice(1,).replace(/(^[\w])(.*)([\w]$)/, `$3$2$1`)}`;
        }
    }

    return result.replace(/\s/, '');
}


// Other answer
// No.1
const encryptThis = text => text.split(' ').map(word => word.replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`).replace(/^\w/, word.charCodeAt(0))).join(' ');