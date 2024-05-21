// write a function to sort an array



// Solution 1

// function AsnSorting(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let temp;
//             if (arr[i] > arr[j]) {
//                 // temp = arr[i];
//                 // arr[i] = arr[j];
//                 // arr[j] = temp;

//                 // swaping using destructuring
//                 // [arr[i], arr[j]] = [arr[j], arr[i]]

//                 // swaping without 3rd variable
//                 arr[i] = arr[i] + arr[j];
//                 arr[j] = arr[i] - arr[j];
//                 arr[i] = arr[i] - arr[j];

//             }
//         }
//     }
//     return arr;
// }

// const arr = [3, 9, 1, 4, 6, 2];
// console.log(AsnSorting(arr));






// Selection Sort
const arr = [2, 4, 3, 1, 5];
let size = arr.length;

function selectionSort(arr, size) {
    for (let i = 0; i < size - 1; i++) {
        let min = i;
        for (let j = i + 1; j < size - 1; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    return arr;
}

console.log(selectionSort(arr, size));