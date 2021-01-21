// My answer
function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const str = string.toLowerCase();

    for (let i = 0; i < alphabet.length - 1; i += 1) {
        if (str.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }

    return true;
}



// Other answer
// No.1
function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
        return string.indexOf(x) !== -1;
    });
}




// No.2
function isPangram(string) {
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}