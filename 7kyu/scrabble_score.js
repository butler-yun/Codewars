// My answer
function scrabbleScore(str) {
    const upperStr = str.toUpperCase();
    const dic = {
        "A": 1,
        "E": 1,
        "I": 1,
        "O": 1,
        "U": 1,
        "L": 1,
        "N": 1,
        "R": 1,
        "S": 1,
        "T": 1,
        "D": 2,
        "G": 2,
        "B": 3,
        "C": 3,
        "M": 3,
        "P": 3,
        "F": 4,
        "H": 4,
        "V": 4,
        "W": 4,
        "Y": 4,
        "K": 5,
        "J": 8,
        "X": 8,
        "Q": 10,
        "Z": 10,
    }
    let sum = 0;

    for (let i = 0; i <= str.length; i += 1) {
        if (dic[upperStr.charAt(i)] === undefined) {
            sum += 0;
        } else {
            sum += dic[upperStr.charAt(i)];
        }
    }

    return sum;
}



// Other answer 1
function scrabbleScore(str) {
    return str.toUpperCase().split('').reduce(function (score, v) {
        return score + ($dict[v] || 0)
    }, 0)
}



// Other answer 2
function scrabbleScore(str) {
    var output = 0;
    for (var i in str) {
        output += $dict[str[i].toUpperCase()] || 0;
    }
    return output;
}


// Other answer 3
function scrabbleScore(str) {
    return [].reduce.call(str.toUpperCase(), (a, c) => a + ($dict[c] || 0), 0);
}



// Other answer 4
var scrabbleScore = str => str.toUpperCase().split('').reduce((p, c) => p + ($dict[c] || 0), 0);



// Other answer 5
function scrabbleScore(str) {
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; ++i) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'l' || str[i] == 'n' || str[i] == 'r' || str[i] == 's' || str[i] == 't')
            count++;
        if (str[i] == 'd' || str[i] == 'g')
            count += 2;
        if (str[i] == 'b' || str[i] == 'c' || str[i] == 'm' || str[i] == 'p')
            count += 3;
        if (str[i] == 'f' || str[i] == 'h' || str[i] == 'v' || str[i] == 'w' || str[i] == 'y')
            count += 4;
        if (str[i] == 'k')
            count += 5;
        if (str[i] == 'j' || str[i] == 'x')
            count += 8;
        if (str[i] == 'q' || str[i] == 'z')
            count += 10;
    }
    return count;
}