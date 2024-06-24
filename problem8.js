// write a function factorial that takes a non-negative number as input and return its factorial


// let num = 5;

// function factorial(num) {
//     if (num == 0 || num == 1) {
//         return 1;
//     }
//     else {
//         let f = 1;
//         for (let i = 2; i <= num; i++) {
//             f = f * i;
//         }
//         return f;
//     }

// }

// console.log(factorial(num));



// Solution 2
// Factorial using recursion
function factorial(num) {
    if (num == 1 || num == 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}


console.log(factorial(6));