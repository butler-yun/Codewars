// My answer
function findUniq(arr) {
    // do magic
    const x = arr.filter((elm) => elm === arr[0]);
    const y = arr.filter((elm) => elm !== arr[0]);

    return x.length > y.length ? y[0] : x[0]
}





// Other answer
// No.1
function findUniq(arr) {
    return arr.filter((elm) => {
        arr.indexOf(elm) === arr.lastIndexOf(elm)
    })
};