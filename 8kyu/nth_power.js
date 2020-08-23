// My answer
function index(array, n) {
    //your code here
    if (array.length <= n || 0 > n) {
        return -1;
    } else {
        return Math.pow(array[n], n);
    }
}


// Other answer
// No.1
const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;


// No.2
function index(array, n) {
    //your code here
    return array[n] ** n || -1;
}