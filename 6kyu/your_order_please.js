// My answer
function order(words) {
    // ...
    return words.length === 0 ? "" : words.split(' ').sort((a, b) => {
        return (Number(a.match(/\d/)) - Number(b.match(/\d/)));
    }).join(' ');
}