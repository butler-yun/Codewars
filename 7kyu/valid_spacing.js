// My answer
function validSpacing(s) {
    // write your code here
    const reg = /(^\s|\s$|\s{2,})/;
    return !(reg.test(s));
}




// Other answer
// No.1
const validSpacing = s => s.replace(/\s+/g, " ").trim() == s;



// No.2
function validSpacing(s) {
    return s.trim() == s && !s.includes("  ");
}




// No.3
function validSpacing(s) {
    return !(/^[\s]|([\s][\W])|[\s]$/g.test(s))
}