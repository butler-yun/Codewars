// My answer
function solution(str) {
    const reverseStr = str.split('').reverse('').join('');
    return reverseStr;
}

// Orther answer
function solution(str) {
    const reverseStr = [...str].reverse('').join('');
    // [...str] = ["s", "t", "r]  === str.split('');
    return reverseStr;
}