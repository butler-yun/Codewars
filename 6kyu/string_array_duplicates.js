// My answer
function dup(s) {
    const initail = [];
    const result = [];

    s.map((elm) => {
        elm.split('').reduce((acc, value, index, arr) => {
            if (arr[index] !== arr[index + 1]) {
                initail.push(arr[index]);
            }

            if (index === arr.length - 1) {
                result.push(initail.join(''));
                initail.length = 0
            }

        }, 0);
    });

    return result;
}



// Other answer
// No.1
function dup(s) {
    return s.map(x => x.replace(/(.)\1+/g, '$1'))
};



// No.2
function dup(s) {
    return s.map(w => {
        return w.split('').filter((c, i, arr) => {
            return c !== arr[i - 1];
        }).join('');
    });
};