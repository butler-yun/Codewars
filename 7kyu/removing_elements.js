// My answer
function removeEveryOther(arr) {
    //your code here
    return arr.filter((_, idx) => idx % 2 === 0);
}




// Other answer
function removeEveryOther(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    }
    return newArr;
}