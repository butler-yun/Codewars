// My answer
function hello(name) {
    if (typeof name === "undefined" || name.length === 0) {
        // if (name)이 더 간결함.
        return `Hello, World!`;
    } else {
        return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
    }
}