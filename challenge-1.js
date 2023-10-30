function countTruthy(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        const x = arr[i];
        if (x){
            newArr.push(x);
        }
    }
    return newArr;
}
console.log(countTruthy([6, 3, 0, 30, 7]))
console.log(countTruthy(['', 3, 0, 30, 7]))
console.log(countTruthy(['', 0, 0, undefined, 7]))
console.log(countTruthy([16, 33, 3, 2]))
console.log(countTruthy([16, 33, null, 2]))

module.exports = countTruthy