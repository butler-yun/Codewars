// My answer
function howMuchILoveYou(nbPetals) {
    // your code
    const arr = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ];

    for (let i = 0; i <= nbPetals - 1; i += 1) {

        if (i === nbPetals - 1) {
            return arr[i % 6];
        }
    }
}




// Other answer
// No.1
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
    return phrases[(n - 1) % phrases.length]
}




// No.2
function howMuchILoveYou(nbPetals) {
    let phrase = {
        0: "not at all",
        1: "I love you",
        2: "a little",
        3: "a lot",
        4: "passionately",
        5: "madly"
    }
    return phrase[nbPetals % 6]
}