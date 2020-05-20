// My answer
function sumEvenNumbers(input) {
    let num = 0;
    const result = input.forEach((evenNum) => evenNum % 2 === 0 ? num += evenNum : evenNum);

    return num;
}

// Orther answer
const sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0)