//Write a function findMax that takes an array of numbers as input and returns the maximum number in array



// Solution 1
// const arr = [2, 5, 6, 3, 1, 5];

// function findMax(arr) {

//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));


// Solution 2
// const arr = [2, 5, 6, 3, 1, 11,4,55,77,1];

// function findMax(arr) {

//     // Use of Spread operator
//     return Math.max(...arr)
// }
// console.log(findMax(arr));