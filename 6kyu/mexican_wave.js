// My answer
function wave(str) {
    // Code here
    const arr = [];
    const string = str.toLowerCase();
    const pattern = /\s/;

    for (let i = 0, j = 1; i < string.length; i += 1) {

        if (string.slice(i, j).match(pattern)) {
            // 현재 문자가 공백일 때 아무 일도 일어나지 않는다.
            j += 1
        } else {
            arr.push(`${string.slice(0, i)}${string.slice(i, j).toUpperCase()}${string.slice(j,)}`)
            j += 1;
        }
    }

    return arr;
}



// Other answer
// No.1
function wave(str) {
    let result = [];

    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });

    return result;
}



// No.2
function wave(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        let copy = str.split('');
        if (copy[i] !== ' ') {
            copy[i] = copy[i].toUpperCase()
            newArr.push(copy.join(''))
        }
    }
    return newArr
}



// No.3
function wave(str) {
    return str.split('').map((l, i, a) => {
        let c = a.slice();
        c[i] = c[i].toUpperCase();
        return c.join('');
    }).filter((w, i) => w[i] !== ' ');
}