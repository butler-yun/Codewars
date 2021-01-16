// My answer
function problem(x) {
    //your code here
    return isNaN(x) || x === "" ? "Error" : (x * 50) + 6;
}



// Other answer
// No.1
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;


// No.2
function problem(x) {
    return typeof x === "number" ? x * 50 + 6 : "Error";
}