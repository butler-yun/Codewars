// My answer
function sum(matrix) {

    let result = 0;
    let count = 0;
    let num = 1;

    for (let i = 0; i <= matrix.length - 1; i += 1) {
        result += matrix[i][count];
        result += matrix[i][matrix.length - num]

        count += 1;
        num += 1
    }

    return result;
}




// Other answer
// No.1
const sum = matrix => matrix.reduce((sum, line, i) => sum + line[i] + line[matrix.length - i - 1], 0)



// No.2
function sum(matrix) {
    if (!matrix.length) return 0;
    for (var i = 0, j = 0, k = matrix[i].length - 1, sum = 0; i < matrix.length; i++) {
        sum += matrix[i][j++] + matrix[i][k--];
    }
    return sum;
}



// No.3
function sum(matrix) {
    return matrix.reduce((acc, val, idx) => {
        return acc += val[idx] + val[val.length - 1 - idx];
    }, 0);
}