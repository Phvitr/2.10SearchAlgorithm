// function matrixElementSum (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] == 0 && i + 1 < arr.length) {
//                 arr[i+1][j] = 0;
//             }
//             sum += arr[i][j];
//         }
//
//     }return sum
//
// }
// let arr = [
//     [0,1,1,2],
//     [0,5,0,0],
//     [2,0,3,3]
// ]
//
// console.log(matrixElementSum(arr))
// function matrixElementSum (arr) {
//     let sum = 0;
//     for (let j = 0; j < arr[0].length; j++) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i][j] == 0) {
//                 break;
//             }
//             sum += arr[i][j];
//         }
//     }return sum;
// }
//
// let arr = [
//     [0,1,1,2],
//     [0,5,0,0],
//     [2,0,3,3]
// ]
//
// console.log(matrixElementSum(arr))
function countcount(arr, value) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            count++;
        }
    }
    return count;
}
var arr = [1, 1, 2, 4, 5, 3, 3, 3, 3, 9, 6];
console.log(countcount(arr, 1));
