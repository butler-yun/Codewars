// My answer
function solve(arr) {

    for (let i = 0; i <= arr.length - 1; i += 1) {

        if (arr.includes(arr[i]) && arr.includes(-(arr[i]))) {
            console.log('nothing happened');
        } else {
            return arr[i];
        }

    }
};


// Other answer
// No.1
const solve = a => a.find(e => !a.includes(-e));



// No.1
function solve(arr) {
    for (var i = 0; i < arr.length; i++)
        if (!arr.includes(-1 * arr[i])) return arr[i];
}