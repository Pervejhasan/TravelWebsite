function positiveNumber(numbsers) {
    let newArray = [];
    for (const num of numbsers) {
        if (num > 0) {
            newArray.push(num);
        }
        else {
            break;
        }
    }
    return newArray;
}

console.log(positiveNumber([2, 90, 40, 20, 30, 80, -5, 2]));
