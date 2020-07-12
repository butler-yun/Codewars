// My answer
function capitalize(s, arr) {
    const array = arr.sort((x, y) => x - y);
    let result = '';

    for (let i = 0, num = 0; i < s.length; i += 1) {
        if (i === array[num]) {
            result += s[i].toUpperCase();
            num += 1;
        } else {
            result += s[i];
        };
    };

    return result;
};


// Other answer
// No.1
function capitalize(s, arr) {
    var capS = s.split("");

    for (var i = 0; i < arr.length; i++) {
        if (capS[arr[i]]) {
            capS[arr[i]] = capS[arr[i]].toUpperCase();
        }
    }
    capS = capS.join("");
    return capS
};



// No.2
let capitalize = (s, a) => s.split ``.map((c, i) => a.includes(i) ? c.toUpperCase() : c).join ``;