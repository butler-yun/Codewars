// My answer
function getMinMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const resultArr = [];

    resultArr.push(min, max);

    return resultArr;
};


// Other answer
// No.1
function getMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
};


// No.2
function getMinMax(arr) {
    const sorted = arr.sort((a, b) => a - b)
    return [sorted[0], sorted[sorted.length - 1]]
};


// No.3
function getMinMax(arr) {
    let [min, max] = [arr[0], arr[0]]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i]
        else if (arr[i] < min)
            min = arr[i]
    }

    return [min, max]
}