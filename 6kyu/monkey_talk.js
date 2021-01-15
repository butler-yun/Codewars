// My answer
function monkeyTalk(phrase) {
    const str = phrase.split(' ');
    const re = /^(a|i|u|e|o)/i;
    const monkeyStr = str.map((elm) => re.test(elm) ? 'eek' : 'ook').join(' ');

    return monkeyStr.charAt(0).toUpperCase() + monkeyStr.slice(1, ) + '.'
}