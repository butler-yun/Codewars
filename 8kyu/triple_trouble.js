// My answer
function tripleTrouble(one, two, three) {
    const arr = [];

    for (let i = 0; i < one.length; i += 1) {
        arr.push(one[i], two[i], three[i]);
    }

    return arr.join('');
}


// Orther answer
// No.1
function tripleTrouble(one, two, three) {
    var result = "";
    for (let i = 0; i < one.length; i++) {
        result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
}


// No.2
function tripleTrouble(one, two, three) {
    let x = ''
    for (i = 0; i < one.length; i++) {
        x += one[i] + two[i] + three[i]
    }
    return x
}


// No.3
const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");