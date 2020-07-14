// My answer
function digitize(n) {
    //code here
    const num = String(n).split('').reverse();
    const resultArr = [];

    num.map((x) => resultArr.push(Number(x)));

    return resultArr;
}



// Other answer
// No.1
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}