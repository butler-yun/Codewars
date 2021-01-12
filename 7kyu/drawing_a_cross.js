// My answer
function drawACross(n) {
    let result = "";
    let reverse = '';
    //Your code here!!!

    if (n < 3) {
        return "Not possible to draw cross for grids less than 3x3!"
    } else if (n % 2 === 0) {
        return "Centered cross not possible!"
    }

    for (let i = 0, j = n - 2; i <= n; i += 1) {

        if (j > 0) {
            result += " ".repeat(i) + "x" + " ".repeat(j) + "x" + " ".repeat(i) + "\n";
            j -= 2;
            reverse = result.slice(0, result.length - 1);

        } else {
            result += " ".repeat(i) + "x" + " ".repeat(i) + "\n";
            return result += reverse.split('').reverse().join('');
        }
    }
}





// Other answer
function drawACross(n) {
    if (n < 3) {
        return 'Not possible to draw cross for grids less than 3x3!'
    }
    if (n % 2 === 0) {
        return "Centered cross not possible!"
    }

    const arr = Array.from({
        length: n
    }, _ => Array(n).fill(' '))

    for (let i = 0; i < arr.length; i++) {
        arr[i][i] = 'x';
        arr[i][arr.length - 1 - i] = 'x';
    }
    return arr.map(el => el.join('')).join('\n')
}