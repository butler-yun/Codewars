// My answer
var splitInParts = function (s, partLength) {
    const re = new RegExp(`.{1,${partLength}}`, 'g');
    return s.match(re).join(' ');
}