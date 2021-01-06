// My answer
const rotateToMax = n => {

    const result = (n + '').split('').sort((a, b) => b - a).join('');

    // Your code
    return +result;
}


// Other answer
// No.1
const rotateToMax = (number) => parseInt([...number + []].sort((a, b) => b - a).join(''))



// No.2
const rotateToMax = n => parseInt(n.toString().split('').sort().reverse().join(''));



// No.3
const rotateToMax = n => {
    return +[...n += ''].sort((a, b) => b > a).join ``
}


// No.4
const rotateToMax = n => n = Number((("" + n).split("")).sort().reverse().join(''));