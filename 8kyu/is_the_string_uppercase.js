// My answer
String.prototype.isUpperCase = function () {
    // your code here
    const re = /([a-z]+)/g;
    return !re.test(this);
}


// Other answer
// No.1
String.prototype.isUpperCase = function () {
    return this == this.toUpperCase()
}


// No.2 
String.prototype.isUpperCase = function () {
    return this.toUpperCase() === this.toString();
}