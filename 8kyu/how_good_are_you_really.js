// My answer
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    const average = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;

    return average > yourPoints ? false : true
}



// Other answer
// No.1
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}



// No.2
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var classAvg = 0;
    for (var i = 0; i < classPoints.length; i++) {
        classAvg += classPoints[i];
    }
    classAvg = classAvg / classPoints.length;
    return yourPoints > classAvg;
}