function solve(s) {
    let lowerNum = 0;
    let upperNum = 0;

    for (let i = 0; i <= s.length - 1; i += 1) {

        if (s[i] === s[i].toLowerCase()) {
            lowerNum += 1;
        } else {
            upperNum += 1;
        }
    }

    return lowerNum >= upperNum ? s.toLowerCase() : s.toUpperCase();
}