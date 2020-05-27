// My answer
function points(games) {
    let point;
    const result = games.map((num) => {
        if (Number(num.charAt(0)) > Number(num.charAt(2))) {
            return point = 3;
        } else if (Number(num.charAt(0)) === Number(num.charAt(2))) {
            return point = 1;
        } else {
            return point = 0;
        }
    })

    return result.reduce((x, y) => x + y);
}


// Orther answer
// No.1
const points = games => games.reduce((output, current) => {
    return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)



// No.2
function points(games) {
    let total = 0;
    games.map(game => {
        if (game[0] === game[2]) {
            total += 1;
        } else if (game[0] > game[2]) {
            total += 3;
        }
    });
    return total;
}