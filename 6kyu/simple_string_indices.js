// My answer
function solve(str, idx) {
    let count = 0;
    let result = 0;

    if (/[^(]/.test(str[idx])) {
        return -1;
    }

    for (let i = idx; i < str.length; i += 1) {
        if (str[i] === "(") {
            count += 1;

        } else if (str[i] === ")") {
            count -= 1;
        }

        if (count === 0) {
            result += i;

            return result;
        }
    }
}



// Other answer
function solve(str, idx) {
    let count = 0;
    for (let i = idx; i < str.length; i += 1) {
        if (str[i] === "(") {
            count += 1;
        } else if (str[i] === ")") {
            count -= 1;
        }
        if (count === 0) {
            return i;
        }
    }

    return -1;
}