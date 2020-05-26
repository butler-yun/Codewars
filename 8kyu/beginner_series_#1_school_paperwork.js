// My answer
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0
    } else {
        return n * m;
    }
}


// Orther answer
function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}