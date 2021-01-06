// My answer
function addArrays(array1, array2) {
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    let result = [];
    let sum = 0;

    if (isNaN(arrayToNumber1)) {
        arrayToNumber1 = 0;
    } else if (isNaN(arrayToNumber2)) {
        arrayToNumber2 = 0;
    }

    // sum two array [string]
    sum = (arrayToNumber1 + arrayToNumber2) + '';

    for (let i = 0; i <= sum.length - 1; i += 1) {

        if (isNaN(sum)) {
            return [];
        }

        if (sum < 0 && sum[i] == '-') {
            result.push(Number(sum[i] + sum[i + 1]));
            i += 1;
        } else {
            result.push(Number(sum[i]));
        }
    }

    return result;
}