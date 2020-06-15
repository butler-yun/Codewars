// My answer
function greet(name) {
    return name === '' || name === null ? null : `hello ${name}!`;
}

// Other answer 1
function greet(name) {
    return name ? 'hello ' + name + '!' : null;
}