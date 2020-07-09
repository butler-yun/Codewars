// My answer
function findOutlier(integers) {
    //your code here
    const even = [];
    const odd = [];

    for (let i = 0; i < integers.length; i += 1) {
        if (integers[i] % 2 === 0) {
            even.push(integers[i]);
        } else {
            odd.push(integers[i]);
        };
    };
    if (even.length > odd.length) {
        return odd[0];
    } else {
        return even[0];
    }
}


// Other answer
// No.1
function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}



// No.2
function findOutlier(integers) {
    return integers.slice(0, 3).filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
}

function even(num) {
    return (num % 2 == 0);
}

function odd(num) {
    return !even(num)
}