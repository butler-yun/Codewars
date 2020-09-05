// My answer
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    return arrayOfSheep.filter((elm) => elm === true).length;
    // arrayOfsheep.filter((elm) => elm).length 로 해도 됌.
    // 매개변수로 받는 배열의 원소 값이 불리언(Boolean) 이기 때문
}



// Other answer
// No.1
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;

    for (var i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] == true)
            num++;

    return num;
}