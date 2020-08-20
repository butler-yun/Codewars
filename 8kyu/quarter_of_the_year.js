// My answer
const quarterOf = (month) => {
    // Your code here
    if (month >= 1 && month <= 3) {
        return 1;
    } else if (month >= 4 && month <= 6) {
        return 2;
    } else if (month >= 7 && month <= 9) {
        return 3;
    } else {
        return 4;
    }
}



// Other answer
// No.1
const quarterOf = (month) => {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    } else if (month <= 12) {
        return 4
    }

}




// No.2
const quarterOf = (month) => {
    // Your code here
    return Math.ceil(month / 3);
}