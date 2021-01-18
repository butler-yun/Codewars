// My answer
function fibonacci(n) {
    //return fibonacci array of n elements
    const result = [];
    let temp = 0;
    let cur = 1;
    let last = 0;

    for (let i = 0; i < n; i += 1) {
        result.push(last);
        temp = cur;
        cur = last;
        last = temp + cur;
    }

    return result;
}