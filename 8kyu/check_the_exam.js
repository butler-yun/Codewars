// My answer
function checkExam(array1, array2) {
    let points = 0;

    array2.map((x, y) => {
        if (x === "") {
            points += 0;
        } else if (x === array1[y]) {
            points += 4;
        } else {
            points += -1;
        }
    })

    return points > 0 ? points : 0;
}


// Other answer
// No.1
function checkExam(array1, array2) {
    const reducer = (a, e, idx) => {
        if (e === "") {
            return a;
        }

        if (e === array1[idx]) {
            return a += 4;
        }

        return --a;
    }
    const score = array2.reduce(reducer, 0);
    return score < 0 ? 0 : score;
}