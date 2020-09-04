// My answer
function findOdd(A) {
    //happy coding!

    for (let i = 0; i <= A.length - 1; i += 1) {

        let elmLength = A.filter((elm) => elm === A[i]).length;

        if (elmLength % 2 !== 0) {
            return A[i];
        }
    }
}



// Other answer
// No.1
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);



// No.2
function findOdd(A) {
    var obj = {};
    A.forEach(function (el) {
        obj[el] ? obj[el]++ : obj[el] = 1;
    });

    for (prop in obj) {
        if (obj[prop] % 2 !== 0) return Number(prop);
    }
}



// No.3
function findOdd(arr) {
    var result, num = 0;
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            num++;
        } else {
            num++;
            if (num % 2 != 0) {
                result = arr[i];
                break;
            }
        }
    }
    return result;
}