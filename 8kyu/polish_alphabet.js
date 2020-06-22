// My answer
function correctPolishLetters(string) {
    const str = string.split('');
    const lookupLetters = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        'ó': 'o',
        'ś': 's',
        'ź': 'z',
        'ż': 'z'
    }

    return str.map((x) => lookupLetters[x] ? lookupLetters[x] : x).join('');
}



// Other answer 1
function correctPolishLetters(string) {
    var dict = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        'ó': 'o',
        'ś': 's',
        'ź': 'z',
        'ż': 'z'
    };
    return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}



// Other answer 2
var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters(string) {
    return string.split('').map((c) => polishLetters[c] || c).join("");
}



// Other answer 3
function correctPolishLetters(string) {
    return string
        .replace(/ł/g, 'l')
        .replace(/ą/g, 'a')
        .replace(/ć/g, 'c')
        .replace(/ę/g, 'e')
        .replace(/ń/g, 'n')
        .replace(/ó/g, 'o')
        .replace(/ś/g, 's')
        .replace(/ź/g, 'z')
        .replace(/ż/g, 'z')
}