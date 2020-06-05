// My answer
function abbrevName(name) {
    const nam = name.split(' ');
    return `${nam[0].charAt(0).toUpperCase()}.${nam[1].charAt(0).toUpperCase()}`;
}

// Orther answer
// No.1
function abbrevName(name) {
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}