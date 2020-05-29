// My answer
function myLanguages(results) {
    const arr = [];
    const resultArr = []

    for (let prop in results) {
        arr.push({
            'lang': prop,
            'score': results[prop],
        });
    }

    arr.sort((a, b) => a.score > b.score ? -1 : a.score < b.score ? 1 : 0);

    arr.forEach((result) => {
        if (result.score >= 60) {
            resultArr.push(result.lang);
        }
    })

    return resultArr;
}



// Orther answer
// No.1
function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] >= 60).sort((a, b) => results[b] - results[a]);
}


// No.2
function myLanguages(results) {
    return Object.entries(results).filter(el => el[1] >= 60).sort((a, b) => b[1] - a[1]).map(item => item[0]);
}