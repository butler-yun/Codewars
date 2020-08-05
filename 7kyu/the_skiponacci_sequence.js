// My answer
function skiponacci(n) {

    let x = 0;
    let y = 1;
    let z;
    let result = [1, ];

    for (let i = 1; i < n; i += 1) {
        z = x + y
        x = y;
        y = z;
        result.push(z);
    }

    return result.map((elm, idx, _) => idx % 2 !== 0 ? 'skip' : elm).join(' ');
}




// Other answer
// No.1
function skiponacci(n) {
    let a = 1;
    let b = 1;
    const result = [];
    for (let i = 0; i < n; i++) {
        let t = a;
        a = b;
        b = t + a;
        result.push(i % 2 == 0 ? t : 'skip');
    }
    return result.join(' ');
}




// No.2
function skiponacci(n) {
    let a = 0,
        b = 1;
    return Array.from({
        length: n
    }, (_, i) => {
        [a, b] = [b, a + b];
        return i & 1 ? 'skip' : a;
    }).join(' ');
}




// No.3
function skiponacci(n) {
    var arr = [1, 1]
    for (var i = 2; i < n; i++)
        arr.push(arr[i - 1] + arr[i - 2]);
    for (var i = 0; i < arr.length; ++i)
        if (i % 2 == 1)
            arr[i] = "skip";
    return n == 1 ? "1" : arr.join(" ");
}