// My answer
function getConsectiveItems(items, key) {
    const re = new RegExp(`[^${key}]`, "g");
    const str = ('' + items).split(re);
    const result = str.map((elm) => elm.length);

    return Math.max(...result);
}





// Other answer
// No.1
function getConsectiveItems(items, key) {
    items = items.toString();
    key = key.toString();
    let max = 0,
        current = 0;
    for (let c of items) {
        current = c == key ? current + 1 : 0;
        if (current > max)
            max = current;
    }
    return max;
}




// No.2
function getConsectiveItems(items, key) {
    var s = new RegExp(key.toString() + "*", 'g')
    return items.toString().match(s).reduce((a, b) => a.length > b.length ? a : b).length
}