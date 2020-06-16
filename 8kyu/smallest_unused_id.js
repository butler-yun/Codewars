// My answer
function nextId(ids) {
    const arr = ids.filter((item, pos, self) => self.indexOf(item) === pos).sort((x, y) => x - y);

    if (arr[0] !== 0) {
        return 0;
    }

    for (let i = 0, j = 1; i <= arr.length; i += 1, j += 1) {
        if (arr[i] - arr[j] !== -1) {
            return arr[i] += 1;
        }
    }
}



// Other answer 1
function nextId(ids) {
    const used = new Set(ids);
    for (let i = 0; i <= ids.length; i++) {
        if (!used.has(i)) return i;
    }
}



// Other answer 2
function nextId(ids) {
    var x = 0;
    while (ids.includes(x)) x++;
    return x;
}



// Other answer 3
function nextId(ids) {
    for (i = 0; i < ids.length; i++) {
        if (ids.indexOf(i) == -1) {
            return i;
        }
    }
    return ids.length;
}



// Other answer 4
nextId = (ids) => ids.sort((a, b) => a - b).reduce((a, b) => a + (a === b), 0)